import gallery from './good-looks-media.json';

export const galleryCategories = {
  rally: '拉力档案',
  automotive: '汽车海报',
  experiments: '视觉实验',
  process: '制作方法',
} as const;

type GalleryCategory = keyof typeof galleryCategories;

const categories: Record<number, GalleryCategory> = {
  1: 'rally', 2: 'rally', 3: 'rally', 4: 'experiments', 5: 'automotive',
  6: 'automotive', 7: 'rally', 8: 'process', 9: 'rally', 10: 'automotive',
  11: 'automotive', 12: 'automotive', 13: 'automotive', 14: 'process', 15: 'automotive',
  16: 'process', 17: 'experiments', 18: 'process', 19: 'experiments', 20: 'experiments',
};

const notes: Record<number, string> = {
  1: "https://www.xiaohongshu.com/discovery/item/6afaf614000000002301228f?source=webshare&xhsshare=pc_web&xsec_token=AB_YPli-Cy5KJEDbDpCli4oVrt5oZBmBWJ7GUJJZLM8Rc%3D&xsec_source=pc_share",
  2: "https://www.xiaohongshu.com/discovery/item/6af09ad2000000000900ca8d?source=webshare&xhsshare=pc_web&xsec_token=AB-8ZXN6e-J9-2MvyA-zWR0MZZkgcUYrGdQb4Pw3q6zgU%3D&xsec_source=pc_share",
  3: "https://www.xiaohongshu.com/discovery/item/6adf47e2000000001500a708?source=webshare&xhsshare=pc_web&xsec_token=ABa22NhmN57xbdHky5n2KH67wMhqtUIA-ez3TKQy0debE%3D&xsec_source=pc_share",
  4: "https://www.xiaohongshu.com/discovery/item/6ad1b93e000000001a027a82?source=webshare&xhsshare=pc_web&xsec_token=ABYwfswVv-cjRBjrnxLbktbpravBTM827yCbztkekGn2c%3D&xsec_source=pc_share",
  5: "https://www.xiaohongshu.com/discovery/item/6acce55a00000000140307ec?source=webshare&xhsshare=pc_web&xsec_token=ABANn08wYo-iCveUYUVP7SfQxlx8Ei7-RG0Unzs0B2vEI%3D&xsec_source=pc_share",
  6: "https://www.xiaohongshu.com/discovery/item/6ac9c6f40000000015003cb7?source=webshare&xhsshare=pc_web&xsec_token=ABGRCsnTbyz4gX4O90KgWQkYcz77JrAVoeGbi5L75qqdo%3D&xsec_source=pc_share",
  7: "https://www.xiaohongshu.com/discovery/item/6ab2c7810000000015007f63?source=webshare&xhsshare=pc_web&xsec_token=ABaPzvjUdcrBXrP09BgpPIy6PbsCmbLIF_ardDzziS770%3D&xsec_source=pc_share",
  8: "https://www.xiaohongshu.com/discovery/item/6ab6028d00000000150009e0?source=webshare&xhsshare=pc_web&xsec_token=AB_oebRkqmtEXJuk5DqVgtDtS7hibY7jANRTYDtGV61r8%3D&xsec_source=pc_share",
  9: "https://www.xiaohongshu.com/discovery/item/6a9401ef000000002902ae92?source=webshare&xhsshare=pc_web&xsec_token=ABPHS3BotWNv2yzkwq3IWzD1vVlDHIFdTm-vzCzxbcCmk%3D&xsec_source=pc_share",
  10: "https://www.xiaohongshu.com/discovery/item/6a86f96b000000002402fe81?source=webshare&xhsshare=pc_web&xsec_token=ABo5RE6u23aZnRA5QcR3u8pRe8R7D9xMBcpd3FpebXna0%3D&xsec_source=pc_share",
  11: "https://www.xiaohongshu.com/discovery/item/6a85e7ba000000002500f021?source=webshare&xhsshare=pc_web&xsec_token=ABgAJygYZcMmEI_1RPLcQqMQHVuPItZnsqU267GQs52Rw%3D&xsec_source=pc_share",
  12: "https://www.xiaohongshu.com/discovery/item/6a87ad19000000003400a8fe?source=webshare&xhsshare=pc_web&xsec_token=AB-x3JMooseVpOC4i0pIBSx8a1D-xpA3RuFog-zPJ4o4s%3D&xsec_source=pc_share",
  13: "https://www.xiaohongshu.com/discovery/item/6a8474bd000000002500f022?source=webshare&xhsshare=pc_web&xsec_token=AB20ITE42I8GEPcDPmXAPRxKqOSHQx_5eU3bVXyr0-zlU%3D&xsec_source=pc_share",
  14: "https://www.xiaohongshu.com/discovery/item/6a833541000000002800a3b2?source=webshare&xhsshare=pc_web&xsec_token=ABwGgXlVCRMInPBL7vpJF2IJNqWVYo9_VjayrlH-3imCg%3D&xsec_source=pc_share",
  15: "https://www.xiaohongshu.com/discovery/item/6a84652a000000002701d20f?source=webshare&xhsshare=pc_web&xsec_token=AB20ITE42I8GEPcDPmXAPRxO9PF70Cq-AMo0DlxWjMfQs%3D&xsec_source=pc_share",
  16: "https://www.xiaohongshu.com/discovery/item/6aa9280f0000000029015ae4?source=webshare&xhsshare=pc_web&xsec_token=ABLvW_NEb5y2DBrgusrG7DpQBhfIwdRfU5l78SiDKtvNc%3D&xsec_source=pc_share",
  17: "https://www.xiaohongshu.com/discovery/item/6aa77aec000000000b00f24c?source=webshare&xhsshare=pc_web&xsec_token=ABKAaBlAzr0TH4D16qb9UpXNdiQS7iDVHGSjcPOndoyWA%3D&xsec_source=pc_share",
  18: "https://www.xiaohongshu.com/discovery/item/6a8b2020000000002b0271d2?source=webshare&xhsshare=pc_web&xsec_token=ABIeIOUc4DzYWmA4KlAnqPAyBoJBmw-t2OZgeq0ByDRSc%3D&xsec_source=pc_share",
  19: "https://www.xiaohongshu.com/discovery/item/6ac89354000000001402f7d6?source=webshare&xhsshare=pc_web&xsec_token=ABxZ00--O209JUzPJ5XtvzMJggRgyxVVBqtuGqGZmQ2_M%3D&xsec_source=pc_share",
  20: "https://www.xiaohongshu.com/discovery/item/6acf3c9c000000001b01c53d?source=webshare&xhsshare=pc_web&xsec_token=ABilkTvyXgyBiTA8O1V1S7072gA0ifwuaL53AjtbSAjSs%3D&xsec_source=pc_share",
};

const featuredOrder = [13, 4, 10, 1, 20, 6, 8];
const featuredRank = new Map(featuredOrder.map((id, index) => [id, index]));

export const goodLooksAlbums = gallery
  .map(album => ({ ...album, category: categories[album.id], original: notes[album.id] }))
  .sort((a, b) =>
    (featuredRank.get(a.id) ?? featuredOrder.length) - (featuredRank.get(b.id) ?? featuredOrder.length)
  );

export const goodLooksFeatured = [1, 13, 20].map(id => goodLooksAlbums.find(album => album.id === id)!);
