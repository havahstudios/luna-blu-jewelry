export interface Product {
  slug: string;
  name: string;
  img: string | null;
  price: string | null;
  soldout: boolean;
  cats: string[];
  desc?: string;
}

export const CATALOG: Product[] = [
  { slug: 'vintage-fendi-bracelet-watch-gold', name: 'Vintage Fendi Bracelet Watch - Gold', img: 'https://assets.bigcartel.com/product_images/421574505/38232BDD-44BC-4496-A6B0-7890172C307B_1_102_o.jpeg?auto=format&fit=max&w=800', price: '750.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-fendi-bracelet-watch-silver', name: 'Vintage Fendi Bracelet Watch - Silver', img: 'https://assets.bigcartel.com/product_images/421574580/3B69A49A-B88B-4DBA-8DC3-59590006AE50_1_102_o.jpeg?auto=format&fit=max&w=800', price: '500.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-collar-choker', name: 'Vintage Collar Choker', img: 'https://assets.bigcartel.com/product_images/415873314/IMG_7428.jpeg?auto=format&fit=max&w=800', price: '150.0', soldout: false, cats: ['Best Sellers', 'Necklaces', 'Statement'] },
  { slug: 'isla-necklace', name: 'Isla Statement Mirrored Necklace', img: 'https://assets.bigcartel.com/product_images/409155333/91ABA159-7EAA-4AF5-A5C7-4AB15B3AD8B2_1_102_a.jpeg?auto=format&fit=max&w=800', price: '215.0', soldout: false, cats: ['Best Sellers', 'Necklaces', 'Statement'], desc: '- Gold-plated brass necklace with cascading hand-set mirrored accents - Features multiple hand-set mirrored accents for a dazzling effect - Adjustable chain for a comfortable, custom fit - Handmade - unique variations and slight irregularities - The perfect statement piece!!' },
  { slug: 'cora-wrap-scarf-necklace', name: 'Cora Wrap Scarf Necklace', img: 'https://assets.bigcartel.com/product_images/412258665/4975E8AC-83EA-444F-AC44-39014DF30829.jpg?auto=format&fit=max&w=800', price: '80.0', soldout: false, cats: ['Best Sellers', 'Necklaces', 'Statement'] },
  { slug: 'marrone-necklace', name: 'Marrone Necklace', img: 'https://assets.bigcartel.com/product_images/411862347/EE928A8E-3F07-42DA-AB30-E858455138C0.jpg?auto=format&fit=max&w=800', price: null, soldout: false, cats: ['Best Sellers', 'Spring/Summer', 'Necklaces'] },
  { slug: 'marrone-bracelet-stack', name: 'Marrone Bracelet Stack', img: 'https://assets.bigcartel.com/product_images/403243167/IMG_6070.jpg?auto=format&fit=max&w=800', price: '115.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer', 'Bracelets'] },
  { slug: 'tiffany-co-elsa-peretti-lacquer-sevillana-pendant-necklace', name: 'Tiffany & Co. Elsa Peretti Lacquer Sevillana Pendant Necklace', img: 'https://assets.bigcartel.com/product_images/422068734/IMG_3888.jpeg?auto=format&fit=max&w=800', price: '330.0', soldout: false, cats: ['One-of-One', 'Necklaces'] },
  { slug: 'ciottolo-necklace-black', name: 'Ciottolo Necklace - Black', img: 'https://assets.bigcartel.com/product_images/421131267/IMG_2948.jpeg?auto=format&fit=max&w=800', price: '80.0', soldout: false, cats: ['Best Sellers', 'Necklaces'] },
  { slug: 'tiered-pearl-choker', name: 'Tiered Pearl Choker', img: 'https://assets.bigcartel.com/product_images/415873692/IMG_7442.jpeg?auto=format&fit=max&w=800', price: '150.0', soldout: false, cats: ['Best Sellers', 'Necklaces', 'Statement'] },
  { slug: 'midnight-cascade-choker', name: 'Midnight Cascade Choker', img: 'https://assets.bigcartel.com/product_images/414219912/unnamed.jpg?auto=format&fit=max&w=800', price: '110.0', soldout: false, cats: ['Best Sellers', 'Necklaces', 'Statement'] },
  { slug: 'lora-necklace', name: 'Lora Statement Mirrored Waterfall Necklace', img: 'https://assets.bigcartel.com/product_images/409155639/6E4124C2-C83F-45FB-933D-4411DEFDC894_1_102_a.jpeg?auto=format&fit=max&w=800', price: '220.0', soldout: false, cats: ['Best Sellers', 'Necklaces', 'Statement'] },
  { slug: 'mila-choker-silver', name: 'Mila Choker - Silver', img: 'https://assets.bigcartel.com/product_images/409155306/B5FFAF19-7ED1-4781-AED8-C5451A82A64F_1_105_c.jpeg?auto=format&fit=max&w=800', price: '80.0', soldout: false, cats: ['Best Sellers', 'Necklaces', 'Statement'] },
  { slug: 'mila-choker-gold', name: 'Mila Choker - Gold', img: 'https://assets.bigcartel.com/product_images/409152315/863A5790-6649-498E-AC74-141FF512EFC5_1_105_c.jpeg?auto=format&fit=max&w=800', price: '80.0', soldout: false, cats: ['Best Sellers', 'Necklaces', 'Statement'] },
  { slug: 'alba-earring', name: 'Alba Hoop Earring', img: 'https://assets.bigcartel.com/product_images/408991785/E1269588-3037-45B2-84AB-DC8A4B91D418_1_105_c.jpeg?auto=format&fit=max&w=800', price: '130.0', soldout: false, cats: ['Earrings'] },
  { slug: 'gemella-stud-earrings', name: 'Gemella Stud Earrings', img: 'https://assets.bigcartel.com/product_images/423685908/IMG_5446.jpeg?auto=format&fit=max&w=800', price: '55.0', soldout: false, cats: ['Best Sellers', 'Earrings'] },
  { slug: 'chiara-stud-earrings', name: 'Chiara Stud Earrings', img: 'https://assets.bigcartel.com/product_images/423686124/IMG_3609.jpeg?auto=format&fit=max&w=800', price: '65.0', soldout: false, cats: ['Best Sellers', 'Earrings'] },
  { slug: 'corallo-neckalce', name: 'Corallo Necklace', img: 'https://assets.bigcartel.com/product_images/409046229/IMG_5602.jpg?auto=format&fit=max&w=800', price: '90.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer', 'Necklaces'] },
  { slug: 'corallo-waist-chain', name: 'Corallo Waist Chain', img: 'https://assets.bigcartel.com/product_images/387560700/DC207D1F-109F-4051-92D8-6F303D9A9B83_1_201_a.jpg?auto=format&fit=max&w=800', price: '145.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer'] },
  { slug: 'mother-of-pearl-shell-necklace', name: 'Mother of Pearl Shell Necklace', img: 'https://assets.bigcartel.com/product_images/403730298/854CD824-ACA6-4289-838F-97A37E461D3C_1_105_c.jpeg?auto=format&fit=max&w=800', price: '70.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer', 'Necklaces'] },
  { slug: 'chunky-turquoise-bracelet-stack', name: 'Chunky Turquoise Bracelet Stack', img: 'https://assets.bigcartel.com/product_images/409046376/97FD6DAD-F7C6-430E-B72B-8E3357594B12_1_102_a.jpeg?auto=format&fit=max&w=800', price: '120.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer', 'Bracelets'] },
  { slug: 'giove-body-chian', name: 'Giove Body Chain', img: 'https://assets.bigcartel.com/product_images/381388686/unnamed.jpg?auto=format&fit=max&w=800', price: '170.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer'] },
  { slug: 'seashell-waist-chain', name: 'Seashell Waist Chain', img: 'https://assets.bigcartel.com/product_images/385019202/1BFD7BF5-CAB3-443D-8C44-B3339B0DAADE_1_201_a.jpeg?auto=format&fit=max&w=800', price: '115.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer'] },
  { slug: 'turquoise-bracelet-stack', name: 'Turquoise Bracelet Stack', img: 'https://assets.bigcartel.com/product_images/387556941/0E54BCA2-922B-4305-B84E-CC243DD6CEA9_1_102_a.jpeg?auto=format&fit=max&w=800', price: null, soldout: false, cats: ['Best Sellers', 'Spring/Summer', 'Bracelets'] },
  { slug: 'collared-metal-choker-gold-filled', name: 'Collared Metal Choker - Gold Filled', img: 'https://assets.bigcartel.com/product_images/397145241/33A507ED-56AB-4DE4-967C-8C8D2A945DFD.jpeg?auto=format&fit=max&w=800', price: '180.0', soldout: false, cats: ['Best Sellers', 'Necklaces'] },
  { slug: 'collared-metal-choker-silver', name: 'Collared Metal Choker - Silver', img: 'https://assets.bigcartel.com/product_images/397145598/F07C4FFB-C958-479A-ACF6-BFB8D5CA929C.jpeg?auto=format&fit=max&w=800', price: '180.0', soldout: false, cats: ['Best Sellers', 'Necklaces'] },
  { slug: 'adjustable-gold-bangle', name: 'Adjustable Gold Bangle', img: 'https://assets.bigcartel.com/product_images/397145784/21366E4F-65DA-4093-9869-3BFB0F6AE076_1_105_c.jpeg?auto=format&fit=max&w=800', price: '130.0', soldout: false, cats: ['Best Sellers', 'Bracelets'] },
  { slug: 'adjustable-silver-bangle', name: 'Adjustable Silver Bangle', img: 'https://assets.bigcartel.com/product_images/397146156/unnamed-1.jpg?auto=format&fit=max&w=800', price: '130.0', soldout: false, cats: ['Best Sellers', 'Bracelets'] },
  { slug: 'ciottolo-necklace', name: 'Ciottolo Necklace', img: 'https://assets.bigcartel.com/product_images/402604887/2FED23E4-4F4F-49E1-89F6-3B3C606BCBE5_1_105_c.jpeg?auto=format&fit=max&w=800', price: '80.0', soldout: false, cats: ['Best Sellers', 'Necklaces'] },
  { slug: 'vintage-j-laurent-rhinestone-watch-tennis-bracelet-set', name: 'Vintage J. Laurent Rhinestone Watch & Tennis Bracelet Set', img: 'https://assets.bigcartel.com/product_images/423685608/IMG_9731.jpeg?auto=format&fit=max&w=800', price: '350.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-cavalli-silver-watch', name: 'Vintage Cavalli Sterling Silver Watch', img: 'https://assets.bigcartel.com/product_images/403216209/4B8EF732-AFBB-4FFA-B516-3FAD5988B778_1_105_c.jpeg?auto=format&fit=max&w=800', price: '345.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'calcolo-bracelet-stack', name: 'Calcolo Bracelet Stack', img: 'https://assets.bigcartel.com/product_images/403215432/ACF60640-FBE0-4F61-AE19-42FDF31E865A_1_105_c.jpeg?auto=format&fit=max&w=800', price: '90.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer', 'Bracelets'] },
  { slug: 'tennis-bracelet', name: 'Tennis Bracelet', img: 'https://assets.bigcartel.com/product_images/395106783/512A685F-8A1C-4A6E-9F86-0B189521AF34_1_102_o.jpeg?auto=format&fit=max&w=800', price: '175.0', soldout: false, cats: ['Bracelets'] },
  { slug: 'tennis-necklace', name: 'Tennis Necklace', img: 'https://assets.bigcartel.com/product_images/395106831/1964CC57-2072-4E80-90DF-ED5B6C24E4A8_1_102_o.jpeg?auto=format&fit=max&w=800', price: '305.0', soldout: false, cats: ['Necklaces'] },
  { slug: 'argento-cuff-gold-filled', name: 'Argento Cuff - Gold Filled', img: 'https://assets.bigcartel.com/product_images/380556036/unnamed-7.jpg.webp?auto=format&fit=max&w=800', price: '175.0', soldout: false, cats: ['Best Sellers'] },
  { slug: 'argento-cuff', name: 'Argento Cuff - Sterling Silver', img: 'https://assets.bigcartel.com/product_images/380560377/unnamed-1.jpg?auto=format&fit=max&w=800', price: '175.0', soldout: false, cats: ['Best Sellers'] },
  { slug: 'the-amore-necklace', name: 'Amore Necklace', img: 'https://assets.bigcartel.com/product_images/380654799/0-2.jpeg?auto=format&fit=max&w=800', price: '105.0', soldout: false, cats: ['Best Sellers', 'Necklaces'] },
  { slug: 'best-friend-necklace-set', name: 'Best Friend Necklace Set', img: 'https://assets.bigcartel.com/product_images/384042849/unnamed-8.jpg?auto=format&fit=max&w=800', price: '75.0', soldout: false, cats: ['Best Sellers', 'Necklaces'] },
  { slug: 'phoebe-necklace', name: 'Giove Necklace', img: 'https://assets.bigcartel.com/product_images/395321925/2.jpeg?auto=format&fit=max&w=800', price: null, soldout: false, cats: ['Best Sellers', 'Necklaces'] },
  { slug: 'solare-necklace', name: 'Solare Necklace - Gold-Filled', img: 'https://assets.bigcartel.com/product_images/380700675/0-3.jpeg?auto=format&fit=max&w=800', price: null, soldout: false, cats: ['Best Sellers', 'Necklaces'] },
  { slug: 'vintage-givenchy-chunky-necklace', name: 'Vintage Givenchy Chunky Necklace', img: 'https://assets.bigcartel.com/product_images/399256041/303CA5A5-CE67-4D7F-90E6-5FD9B57F0832_1_105_c.jpeg?auto=format&fit=max&w=800', price: '270.0', soldout: false, cats: ['One-of-One', 'Necklaces'] },
  { slug: 'solare-bracelet', name: 'Solare Bracelet', img: 'https://assets.bigcartel.com/product_images/376720480/0-2.jpeg?auto=format&fit=max&w=800', price: '65.0', soldout: false, cats: ['Best Sellers', 'Bracelets'] },
  { slug: 'solare-ring', name: 'Solare Ring - Gold-Filled', img: 'https://assets.bigcartel.com/product_images/376019263/0.jpeg?auto=format&fit=max&w=800', price: '45.0', soldout: false, cats: ['Best Sellers', 'Rings'] },
  { slug: 'signet-ring', name: 'Signet Ring', img: 'https://assets.bigcartel.com/product_images/349404280/0.jpeg?auto=format&fit=max&w=800', price: '37.0', soldout: false, cats: ['Best Sellers', 'Rings'] },
  { slug: 'pave-hoops', name: 'Pavé Hoop Earrings', img: 'https://assets.bigcartel.com/product_images/377561008/0-15.jpeg?auto=format&fit=max&w=800', price: '75.0', soldout: false, cats: ['Best Sellers'] },
  { slug: 'mermaid-shell-earring', name: 'Mermaid Shell Earring', img: 'https://assets.bigcartel.com/product_images/393432252/unnamed.jpg?auto=format&fit=max&w=800', price: '80.0', soldout: false, cats: ['Best Sellers', 'Earrings'] },
  { slug: 'tab-earring', name: 'Tab Earring', img: 'https://assets.bigcartel.com/product_images/393431466/0771F326-DD96-428A-9C5D-E4DB17B03954_1_105_c.jpeg?auto=format&fit=max&w=800', price: '65.0', soldout: false, cats: ['Best Sellers', 'Earrings'] },
  { slug: 'knotted-stud-earring-mixed-metal', name: 'Knotted Stud Earring - Mixed Metal', img: 'https://assets.bigcartel.com/product_images/395681709/97272868-768A-4B5A-B91E-D10142075F53_1_102_o.jpeg?auto=format&fit=max&w=800', price: '80.0', soldout: false, cats: ['Best Sellers', 'Earrings'] },
  { slug: 'knotted-stud-earring', name: 'Knotted Stud Earring', img: 'https://assets.bigcartel.com/product_images/393430872/A59BC313-0B5E-4503-9BFE-99D7BA55D575_1_105_c.jpeg?auto=format&fit=max&w=800', price: '70.0', soldout: false, cats: ['Best Sellers', 'Earrings'] },
  { slug: 'silvia-earring', name: 'Silvia Earring', img: 'https://assets.bigcartel.com/product_images/393436008/EF5C0A18-823E-408B-88ED-F296528BA19D_1_105_c.jpeg?auto=format&fit=max&w=800', price: '70.0', soldout: false, cats: ['Best Sellers', 'Earrings'] },
  { slug: 'circular-stud-earring', name: 'Circular Stud Earring', img: 'https://assets.bigcartel.com/product_images/393432948/C50ED6E4-045B-4D53-861F-74214F27531B_1_105_c.jpeg?auto=format&fit=max&w=800', price: '70.0', soldout: false, cats: ['Best Sellers', 'Earrings'] },
  { slug: 'circularcz-stud-earring', name: 'Circular CZ Stud Earring', img: 'https://assets.bigcartel.com/product_images/393432738/2F188EAD-732C-40E3-B1A6-33F85203CBF5_1_105_c.jpeg?auto=format&fit=max&w=800', price: '90.0', soldout: false, cats: ['Best Sellers', 'Earrings'] },
  { slug: 'turquoise-charm-choker', name: 'Turquoise Charm Choker', img: 'https://assets.bigcartel.com/product_images/392170494/unnamed-6.jpg?auto=format&fit=max&w=800', price: '65.0', soldout: false, cats: ['Best Sellers', 'Necklaces'] },
  { slug: 'turquoise-beaded-necklace', name: 'Turquoise Beaded Necklace', img: 'https://assets.bigcartel.com/product_images/409140366/51E74F31-D2EE-48EE-AD14-EC655E0434AD_1_105_c.jpeg?auto=format&fit=max&w=800', price: '60.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer', 'Necklaces'] },
  { slug: 'blue-beaded-necklace', name: 'Blue Beaded Necklace', img: 'https://assets.bigcartel.com/product_images/409149213/C7C31FAC-3E79-493F-A7A0-655480B37E3B_1_105_c.jpeg?auto=format&fit=max&w=800', price: '60.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer', 'Necklaces'] },
  { slug: 'turquoise-necklace', name: 'Turquoise Necklace', img: 'https://assets.bigcartel.com/product_images/387681708/IMG_1443.jpeg?auto=format&fit=max&w=800', price: '60.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer', 'Necklaces'] },
  { slug: 'turquoise-chunky-beaded-necklace', name: 'Turquoise Chunky Beaded Necklace', img: 'https://assets.bigcartel.com/product_images/388413369/IMG_2281.jpeg?auto=format&fit=max&w=800', price: '105.0', soldout: false, cats: ['Best Sellers', 'Spring/Summer', 'Necklaces'] },
  { slug: 'stella-starfish-turqouise-beaded-necklace', name: 'Stella Starfish Turquoise Beaded Necklace', img: 'https://assets.bigcartel.com/product_images/389773404/E2BA490F-5206-4D7B-95F1-E1AE04BEDF6B_1_105_c.jpeg?auto=format&fit=max&w=800', price: '140.0', soldout: false, cats: ['Spring/Summer', 'Necklaces'] },
  { slug: 'royal-blu-choker', name: 'Royal Blü Choker', img: 'https://assets.bigcartel.com/product_images/426229380/8A530DE9-0A96-4EDE-9F92-6D080A4A1313_1_105_c.jpeg?auto=format&fit=max&w=800', price: '65.0', soldout: false, cats: ['Spring/Summer', 'Necklaces'] },
  { slug: 'royal-blue-eye-choker', name: 'Royal Blu Eye Choker', img: 'https://assets.bigcartel.com/product_images/388388277/747CECB3-238C-445C-9AB1-EF9229012D2D_1_105_c.jpeg?auto=format&fit=max&w=800', price: '65.0', soldout: false, cats: ['Spring/Summer', 'Necklaces'] },
  { slug: 'agate-chunky-beaded-necklace', name: 'Agate Chunky Beaded Necklace - Royal Blue', img: 'https://assets.bigcartel.com/product_images/388387902/43FBAADE-BC9B-4C93-9B6C-59E6F2BA4486_1_105_c.jpeg?auto=format&fit=max&w=800', price: '105.0', soldout: false, cats: ['Spring/Summer', 'Necklaces'] },
  { slug: 'agate-chunky-beaded-necklace-yellow', name: 'Agate Chunky Beaded Necklace - Yellow', img: 'https://assets.bigcartel.com/product_images/388412703/1.jpeg?auto=format&fit=max&w=800', price: '105.0', soldout: false, cats: ['Spring/Summer', 'Necklaces'] },
  { slug: 'agate-chunky-beaded-necklace-jade', name: 'Agate Chunky Beaded Necklace - Jade Green', img: 'https://assets.bigcartel.com/product_images/388413081/IMG_2289.jpeg?auto=format&fit=max&w=800', price: '105.0', soldout: false, cats: ['Spring/Summer', 'Necklaces'] },
  { slug: 'agate-chunky-beaded-necklace-pink', name: 'Agate Chunky Beaded Necklace - Pink', img: 'https://assets.bigcartel.com/product_images/388412373/E4595F75-BA59-4CAA-BDD2-E1D143C959CF_1_105_c.jpeg?auto=format&fit=max&w=800', price: '105.0', soldout: false, cats: ['Spring/Summer', 'Necklaces'] },
  { slug: 'agate-chunky-beaded-bracelet', name: 'Agate Chunky Beaded Bracelet', img: 'https://assets.bigcartel.com/product_images/388410981/CE5C7102-27F3-4899-BC7B-BCF20B91CECA_1_102_o.jpeg?auto=format&fit=max&w=800', price: '65.0', soldout: false, cats: ['Spring/Summer', 'Bracelets'] },
  { slug: 'the-luna-pearl-necklace', name: 'Luna Pearl Necklace', img: 'https://assets.bigcartel.com/product_images/380627016/4.jpg?auto=format&fit=max&w=800', price: '145.0', soldout: false, cats: ['Spring/Summer', 'Necklaces'] },
  { slug: 'the-perla-charm-choker', name: 'Perla Charm Choker', img: 'https://assets.bigcartel.com/product_images/379684947/0.jpeg?auto=format&fit=max&w=800', price: '50.0', soldout: false, cats: ['Spring/Summer', 'Necklaces'] },
  { slug: 'the-mare-necklace', name: 'Mare Necklace', img: 'https://assets.bigcartel.com/product_images/381513468/IMG_2116-2.jpg?auto=format&fit=max&w=800', price: '75.0', soldout: false, cats: ['Spring/Summer', 'Necklaces'] },
  { slug: 'layerable-spring-choker', name: 'Multi-Charm Spring Choker', img: 'https://assets.bigcartel.com/product_images/380628147/crop+out+top.jpg?auto=format&fit=max&w=800', price: '50.0', soldout: false, cats: ['Spring/Summer'] },
  { slug: 'the-summer-choker', name: 'Summer Choker', img: 'https://assets.bigcartel.com/product_images/332011038/169063917_3534371053335208_8623979474196551258_n.jpg?auto=format&fit=max&w=800', price: '50.0', soldout: false, cats: ['Spring/Summer'] },
  { slug: 'the-summer-waist-chain', name: 'Summer Waist Chain', img: 'https://assets.bigcartel.com/product_images/331559343/unnamed.jpg?auto=format&fit=max&w=800', price: '115.0', soldout: false, cats: ['Spring/Summer'] },
  { slug: 'vintage-cartier-santos-ronde-quartz-watch', name: 'Vintage Cartier Santos Ronde Quartz Watch', img: 'https://assets.bigcartel.com/product_images/409492068/99370A5F-E05E-489F-9DA5-1D4C278109A6_1_102_o.jpeg?auto=format&fit=max&w=800', price: '2800.0', soldout: true, cats: ['One-of-One'] },
  { slug: 'vintage-gucci-leather-band-watch', name: 'Vintage Gucci Leather Band Watch', img: 'https://assets.bigcartel.com/product_images/400471809/9E109F0F-8AEB-4999-A09C-96EF208823BA_1_105_c.jpeg?auto=format&fit=max&w=800', price: '325.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-gucci-1400l-gold-bangle-watch', name: 'Vintage Gucci 1400L Gold Bangle Watch', img: 'https://assets.bigcartel.com/product_images/405160257/3DD3B382-528C-4B2F-BF0D-027D9284ECA5_1_105_c.jpeg?auto=format&fit=max&w=800', price: '415.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-gucci-puffed-mariner-chain-watch', name: 'Vintage Gucci Puffed Mariner Chain Watch', img: 'https://assets.bigcartel.com/product_images/389333148/F9E573A1-F9E5-4AC1-A636-50C94B173AFE_1_105_c.jpeg?auto=format&fit=max&w=800', price: '315.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-two-toned-ysl-chronograph-watch', name: 'Vintage Two-Toned YSL Chronograph Watch', img: 'https://assets.bigcartel.com/product_images/395256435/IMG_3940.jpeg?auto=format&fit=max&w=800', price: '490.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'ysl-black-stone-accent-ring-size-6', name: 'YSL Black Stone Accent Ring - Size 6', img: 'https://assets.bigcartel.com/product_images/394120179/IMG_1870.jpeg?auto=format&fit=max&w=800', price: '600.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-givenchy-brick-earring', name: 'Vintage Givenchy Brick Earring', img: 'https://assets.bigcartel.com/product_images/399774903/B698BC08-CD71-42E7-B3CA-2B5764C99E18_1_105_c.jpeg?auto=format&fit=max&w=800', price: '170.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'blue-vintage-christian-dior-clip-on', name: 'Blue Vintage Christian Dior Clip On Earrings', img: 'https://assets.bigcartel.com/product_images/388978683/unnamed.jpg?auto=format&fit=max&w=800', price: '265.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-christian-dior', name: 'Vintage Christian Dior CZ Clip On Earrings', img: 'https://assets.bigcartel.com/product_images/383045619/0-16.jpeg?auto=format&fit=max&w=800', price: '265.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-fendi-studs', name: 'Vintage Fendi Stud Earrings', img: 'https://assets.bigcartel.com/product_images/383045127/0-1.jpeg?auto=format&fit=max&w=800', price: '255.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-ysl-clip-on-studs', name: 'Vintage YSL Clip On Stud Earrings', img: 'https://assets.bigcartel.com/product_images/383045409/0-10.jpeg?auto=format&fit=max&w=800', price: '255.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-ysl-cabochon-clip-on-earrings', name: 'Vintage YSL Cabochon Clip On Earrings', img: 'https://assets.bigcartel.com/product_images/389749362/unnamed.png?auto=format&fit=max&w=800', price: '290.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-christian-dior-clip-ons', name: 'Vintage Christian Dior Clip On Hoop Earrings', img: 'https://assets.bigcartel.com/product_images/383045232/0-5.jpeg?auto=format&fit=max&w=800', price: '135.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'vintage-givenchy-white-resin-earrings', name: 'Vintage Givenchy White Resin Earrings', img: 'https://assets.bigcartel.com/product_images/389877813/3F2DBCF0-E1AE-4665-88D0-2EEF6B6C0CE8_4_5005_c.jpeg?auto=format&fit=max&w=800', price: '270.0', soldout: false, cats: ['One-of-One'] },
  { slug: 'gold-luna-bracelet-8mm', name: 'Gold Luna Bracelet - 8mm', img: 'https://assets.bigcartel.com/product_images/392169969/unnamed.jpg?auto=format&fit=max&w=800', price: '195.0', soldout: false, cats: ['Bracelets'] },
  { slug: 'terra-bracelet', name: 'Terra Bracelet', img: 'https://assets.bigcartel.com/product_images/384344730/IMG_2223.jpeg?auto=format&fit=max&w=800', price: '45.0', soldout: false, cats: ['Bracelets'] },
  { slug: 'the-silver-luna-bracelet-2mm', name: 'Silver Luna Bracelet - 2mm', img: 'https://assets.bigcartel.com/product_images/380584989/1-13.jpeg-pdf.jpg?auto=format&fit=max&w=800', price: '40.0', soldout: false, cats: ['Bracelets'] },
  { slug: 'the-saturno-bracelet', name: 'Saturno Bracelet', img: 'https://assets.bigcartel.com/product_images/380585010/1-16-1-pdf.jpg?auto=format&fit=max&w=800', price: '68.0', soldout: false, cats: ['Bracelets'] },
  { slug: 'the-mixed-metal-bracelet', name: 'Mixed Metal Bracelet', img: 'https://assets.bigcartel.com/product_images/380585079/0-3-pdf.jpg?auto=format&fit=max&w=800', price: '60.0', soldout: false, cats: ['Bracelets'] },
  { slug: 'luna-bundle', name: 'Luna Bundle', img: 'https://assets.bigcartel.com/product_images/374383870/129218318_3562878027132933_6491509323319750100_n.jpg?auto=format&fit=max&w=800', price: '140.0', soldout: false, cats: ['Bracelets'] },
  { slug: 'bubble-initial-necklace', name: 'Bubble Initial Necklace', img: 'https://assets.bigcartel.com/product_images/375563455/0-12.jpeg?auto=format&fit=max&w=800', price: '130.0', soldout: false, cats: ['Necklaces'] },
  { slug: 'cowboy-charm-necklace', name: 'Cowboy Charm Necklace', img: 'https://assets.bigcartel.com/product_images/384043155/unnamed-14.jpg?auto=format&fit=max&w=800', price: '55.0', soldout: false, cats: ['Necklaces'] },
  { slug: 'the-gold-luna-ring-2mm', name: 'Gold Luna Ring - 2mm', img: 'https://assets.bigcartel.com/product_images/380618559/0.jpeg?auto=format&fit=max&w=800', price: '17.0', soldout: false, cats: ['Rings'] },
  { slug: 'the-gold-luna-ring-3mm', name: 'Gold Luna Ring - 3mm', img: 'https://assets.bigcartel.com/product_images/380618565/0-1.jpeg?auto=format&fit=max&w=800', price: '18.0', soldout: false, cats: ['Rings'] },
  { slug: 'the-perla-ring', name: 'Perla Ring', img: 'https://assets.bigcartel.com/product_images/379463520/0-17.jpeg?auto=format&fit=max&w=800', price: '20.0', soldout: false, cats: ['Rings'] },
  { slug: 'the-gold-luna-ring-4mm', name: 'Gold Luna Ring - 4mm', img: 'https://assets.bigcartel.com/product_images/380618610/0-2.jpeg?auto=format&fit=max&w=800', price: '20.0', soldout: false, cats: ['Rings'] },
  { slug: 'the-silver-luna-ring-2mm', name: 'Silver Luna Ring - 2mm', img: 'https://assets.bigcartel.com/product_images/380621061/1-8.jpeg.jpg?auto=format&fit=max&w=800', price: '10.0', soldout: false, cats: ['Rings'] },
  { slug: 'the-silver-luna-ring-3mm', name: 'Silver Luna Ring - 3mm', img: 'https://assets.bigcartel.com/product_images/380621310/1-10.jpeg.jpg?auto=format&fit=max&w=800', price: '12.0', soldout: false, cats: ['Rings'] },
  { slug: 'solare-ring-rhodium', name: 'Solare Ring - Rhodium', img: 'https://assets.bigcartel.com/product_images/385021128/IMG_3450.jpeg?auto=format&fit=max&w=800', price: '45.0', soldout: false, cats: ['Rings'] },
  { slug: 'moissanite-oval-stud-earrings', name: 'Moissanite Oval Stud Earrings', img: 'https://assets.bigcartel.com/product_images/423685215/IMG_5470.jpeg?auto=format&fit=max&w=800', price: '105.0', soldout: false, cats: ['Earrings'] },
  { slug: 'the-nocturne-stack', name: 'The Nocturne Stack', img: 'https://assets.bigcartel.com/product_images/404923938/3CB75A2C-02CB-4061-99A1-2FB0788E5C39_1_105_c.jpeg?auto=format&fit=max&w=800', price: '140.0', soldout: false, cats: ["The Men's Edit"] },
  { slug: 'the-mykonos-stack', name: 'The Mykonos Stack', img: 'https://assets.bigcartel.com/product_images/404931087/70FAC6AA-9DFA-4012-93A3-725FD367A31B_1_105_c.jpeg?auto=format&fit=max&w=800', price: '140.0', soldout: false, cats: ["The Men's Edit"] },
  { slug: 'the-verde-stack', name: 'The Verde Stack', img: 'https://assets.bigcartel.com/product_images/404924064/AC2BE1FC-3942-45D2-B2FC-244FFDCCACB9_1_105_c.jpeg?auto=format&fit=max&w=800', price: '140.0', soldout: false, cats: ["The Men's Edit"] },
  { slug: 'the-link', name: 'The Link', img: 'https://assets.bigcartel.com/product_images/404947314/79E5B662-AD74-467B-A0BF-6518AC9AC5FF_1_105_c.jpeg?auto=format&fit=max&w=800', price: '165.0', soldout: false, cats: ["The Men's Edit"] },
  { slug: 'the-core', name: 'The Core', img: 'https://assets.bigcartel.com/product_images/404930382/761C8369-BCAA-4BDA-9BAE-DCF401102AF7_1_105_c.jpeg?auto=format&fit=max&w=800', price: '52.0', soldout: false, cats: ["The Men's Edit"] },
  { slug: 'the-core-ii', name: 'The Core II', img: 'https://assets.bigcartel.com/product_images/404930346/345B4637-A499-4A4C-937A-313638DFC58D_1_105_c.jpeg?auto=format&fit=max&w=800', price: '52.0', soldout: false, cats: ["The Men's Edit"] },
  { slug: 'the-fade-black', name: 'The Fade - Black', img: 'https://assets.bigcartel.com/product_images/404930664/392E915C-9ADC-4064-8CF4-7344CE78CC91_1_105_c.jpeg?auto=format&fit=max&w=800', price: '52.0', soldout: false, cats: ["The Men's Edit"] },
  { slug: 'the-fade-brown', name: 'The Fade - Brown', img: 'https://assets.bigcartel.com/product_images/404929506/0319B1FA-9110-47FE-8C03-335C669C18DE_1_105_c.jpeg?auto=format&fit=max&w=800', price: '52.0', soldout: false, cats: ["The Men's Edit"] },
  { slug: 'the-fade-sandstone', name: 'The Fade - Sandstone', img: 'https://assets.bigcartel.com/product_images/404930793/3921FA9A-5D17-477A-8864-007761A8421F_1_105_c.jpeg?auto=format&fit=max&w=800', price: '52.0', soldout: false, cats: ["The Men's Edit"] },
  { slug: 'the-fade-blue', name: 'The Fade - Blue', img: 'https://assets.bigcartel.com/product_images/404930574/F78B7DA1-17D0-4034-939A-183504621B23_1_105_c.jpeg?auto=format&fit=max&w=800', price: '52.0', soldout: false, cats: ["The Men's Edit"] },
  { slug: 'the-fade-green', name: 'The Fade - Green', img: 'https://assets.bigcartel.com/product_images/404930424/376C5A33-26F0-4D71-A765-500ACE32AB56_1_105_c.jpeg?auto=format&fit=max&w=800', price: '52.0', soldout: false, cats: ["The Men's Edit"] },
];

export const FEATURED_SLUGS = [
  'isla-necklace', 'cora-wrap-scarf-necklace', 'marrone-necklace', 'marrone-bracelet-stack',
  'ciottolo-necklace-black', 'tiered-pearl-choker', 'midnight-cascade-choker', 'lora-necklace',
];

export function formatPrice(price: string | null): string {
  if (!price) return 'Contact for price';
  const n = parseFloat(price);
  if (isNaN(n)) return 'Contact for price';
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function getProductBySlug(slug: string): Product | undefined {
  return CATALOG.find(p => p.slug === slug);
}

export function getProductsByCategory(cat: string): Product[] {
  if (cat === 'All') return CATALOG;
  return CATALOG.filter(p => p.cats.includes(cat));
}

export const CATEGORIES = [
  'All', 'Best Sellers', 'Spring/Summer', 'One-of-One',
  'Bracelets', 'Necklaces', 'Rings', 'Earrings', "The Men's Edit", 'Statement',
];

export const SHOP_CATS = [
  { label: 'Best Sellers',  cat: 'Best Sellers',  img: 'https://assets.bigcartel.com/product_images/409155333/91ABA159-7EAA-4AF5-A5C7-4AB15B3AD8B2_1_102_a.jpeg?auto=format&fit=max&w=800' },
  { label: 'Spring/Summer', cat: 'Spring/Summer', img: 'https://assets.bigcartel.com/product_images/411862347/EE928A8E-3F07-42DA-AB30-E858455138C0.jpg?auto=format&fit=max&w=800' },
  { label: 'One-of-One',   cat: 'One-of-One',   img: 'https://assets.bigcartel.com/product_images/421574505/38232BDD-44BC-4496-A6B0-7890172C307B_1_102_o.jpeg?auto=format&fit=max&w=800' },
  { label: 'All Products', cat: 'All',           img: 'https://assets.bigcartel.com/product_images/415873692/IMG_7442.jpeg?auto=format&fit=max&w=800' },
];
