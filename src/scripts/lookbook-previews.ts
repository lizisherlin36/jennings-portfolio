interface PreviewAlbum {
  id: number;
  images: number[];
}

interface CardPreview {
  album: PreviewAlbum;
  media: HTMLElement;
  toggle: HTMLButtonElement;
  count: HTMLElement;
  frames: HTMLImageElement[];
}

interface Playback {
  card: CardPreview;
  manual: boolean;
  index: number;
  next: number;
  front: HTMLImageElement | null;
  timer: number;
}

const previewDelay = 360;
const frameDuration = 1250;

export function setupLookbookPreviews(
  root: HTMLElement,
  albums: PreviewAlbum[],
  thumbnail: (albumId: number, imageId: number) => string,
) {
  const cards = root.querySelectorAll<HTMLElement>('[data-look-preview-album]');
  let playback: Playback | undefined;
  let hoverTimer = 0;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const visibility = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.target === playback?.card.media && !entry.isIntersecting)) stop();
  });

  function stop() {
    window.clearTimeout(hoverTimer);
    if (!playback) return;
    const { card, timer } = playback;
    playback = undefined;
    window.clearTimeout(timer);
    visibility.unobserve(card.media);
    card.media.classList.remove('is-previewing');
    card.toggle.setAttribute('aria-pressed', 'false');
    card.toggle.textContent = '预览';
    card.count.textContent = `${card.album.images.length} 张`;
    for (const frame of card.frames) frame.classList.remove('is-preview-frame');
  }

  function schedule(current: Playback, delay: number) {
    current.timer = window.setTimeout(() => { void advance(current); }, delay);
  }

  async function advance(current: Playback) {
    if (playback !== current) return;
    const { card } = current;
    const next = current.next;
    current.next = (next + 1) % card.album.images.length;
    const frame = current.front === card.frames[0] ? card.frames[1] : card.frames[0];
    frame.src = thumbnail(card.album.id, card.album.images[next]);
    try {
      await frame.decode();
    } catch {
      if (playback === current) schedule(current, frameDuration);
      return;
    }
    if (playback !== current) return;

    current.front?.classList.remove('is-preview-frame');
    frame.classList.add('is-preview-frame');
    current.front = frame;
    current.index = next;
    card.count.textContent = `${next + 1} / ${card.album.images.length}`;
    schedule(current, frameDuration);
  }

  function start(card: CardPreview, manual: boolean) {
    if (playback?.card === card || document.hidden) return;
    stop();
    playback = { card, manual, index: 0, next: 1, front: null, timer: 0 };
    visibility.observe(card.media);
    card.media.classList.add('is-previewing');
    card.toggle.setAttribute('aria-pressed', 'true');
    card.toggle.textContent = '停止';
    schedule(playback, previewDelay);
  }

  for (const media of cards) {
    const album = albums.find(item => item.id === Number(media.dataset.lookPreviewAlbum));
    if (!album || album.images.length < 2) continue;
    const card = {
      album,
      media,
      toggle: media.querySelector<HTMLButtonElement>('[data-look-preview-toggle]')!,
      count: media.querySelector<HTMLElement>('[data-look-preview-count]')!,
      frames: Array.from(media.querySelectorAll<HTMLImageElement>('.lookbook-preview-frame')),
    };
    card.toggle.hidden = false;
    media.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'mouse' || motion.matches) return;
      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => start(card, false), 220);
    });
    media.addEventListener('pointerleave', () => {
      window.clearTimeout(hoverTimer);
      if (playback?.card === card && !playback.manual) stop();
    });
    card.toggle.addEventListener('click', () => {
      if (playback?.card === card) stop();
      else start(card, true);
    });
  }

  if (cards.length > 0) {
    document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
    motion.addEventListener('change', () => { if (motion.matches && !playback?.manual) stop(); });
    root.addEventListener('keydown', event => { if (event.key === 'Escape') stop(); });
  }

  return {
    stop,
    currentIndex(albumId: number) {
      return playback?.card.album.id === albumId ? playback.index : 0;
    },
  };
}
