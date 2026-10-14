// Weca Offroad Centre - Complete Data Store
// All products, services, testimonials, and gallery items

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string | null;
  description: string;
  features: string[];
  image: string;
  inStock: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  startingPrice: string | null;
  duration: string;
  features: string[];
  image: string;
  /** Honest alt text describing what the image actually shows. */
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  vehicle: string;
  date: string;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  vehicle: string;
  description: string;
  image: string;
  workDone: string[];
  date: string;
}

export interface Brand {
  name: string;
  logo: string;
  description: string;
  website?: string;
}

// Product Categories
export const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'rooftop-tents', name: 'Rooftop Tents' },
  { id: 'suspension', name: 'Suspension & Shocks' },
  { id: 'bumpers', name: 'Bumpers & Protection' },
  { id: 'canopies', name: 'Canopies & Storage' },
  { id: 'lighting', name: 'Lighting' },
  { id: 'camping', name: 'Camping Equipment' },
  { id: 'seat-covers', name: 'Seat Covers & Interior' },
  { id: 'tyres', name: 'Tyres & Wheels' },
  { id: 'recovery', name: 'Recovery Gear' },
  { id: 'winches', name: 'Winches & Electric' },
  { id: 'awnings', name: 'Awnings & Shelters' },
  { id: 'refrigeration', name: 'Fridges & Coolers' },
  { id: 'power', name: 'Power & Battery' },
  { id: 'navigation', name: 'Navigation & Comms' }
];

// Products
// REPLACEMENT PRODUCTS ARRAY for src/lib/data.ts
// Source: owner-supplied SA supplier list (IMG_7143) + owner-approved supplier
// research blueprint + the 20 client-confirmed site brands in src/lib/config.ts.
// Pricing policy (owner instruction): every product is POA. No price may be
// estimated, guessed or generated. Product photos are dealer-sourced reference
// images recorded in the workspace imgsearch log; cards without a matched
// photo use an on-brand tile.
export const products: Product[] = [
  {
    id: 'tentco-rooftop-tents',
    name: 'Tentco Rooftop Tents (Senior & Executive Range)',
    brand: 'Tentco',
    category: 'rooftop-tents',
    price: 'POA',
    description: 'Tentco canvas rooftop tents for touring and overlanding. Weca Offroad is a Tentco Premium Partner, so the full Senior and Executive range is quoted with factory backing and fitment done in our Swakopmund workshop.',
    features: ['Heavy-duty ripstop canvas', 'Built-in mattress and ladder included', 'Quoted per vehicle with fitment included', 'Tentco Premium Partner'],
    image: '/images/products/tentco-rooftop-tents.webp',
    inStock: true,
  },
  {
    id: 'howling-moon-tourer-rtt',
    name: 'Howling Moon Tourer Rooftop Tent',
    brand: 'Howling Moon',
    category: 'rooftop-tents',
    price: 'POA',
    description: 'The Howling Moon Tourer is the classic canvas touring tent in the range: quick setup, a full-size mattress and a proven track record across Southern Africa. Quoted to your vehicle and fitted at Weca.',
    features: ['Proven canvas touring design', 'Full-size high-density mattress', 'Extendable annex option', 'Swakopmund fitment available'],
    image: '/images/products/howling-moon-tourer-rtt.webp',
    inStock: true,
  },
  {
    id: 'howling-moon-deluxe-rtt',
    name: 'Howling Moon Deluxe Rooftop Tent',
    brand: 'Howling Moon',
    category: 'rooftop-tents',
    price: 'POA',
    description: 'The Deluxe steps the Tourer up with more interior height and comfort detail for longer trips. Ask us for the current model lineup and a quote that includes fitment on your bakkie or 4x4.',
    features: ['Extra interior headroom', 'Comfort touring layout', 'Closing strip and flysheet detail', 'Quoted per application'],
    image: '/images/products/tiles/tile-howling-moon.webp',
    inStock: true,
  },
  {
    id: 'howling-moon-stargazer-rtt',
    name: 'Howling Moon Stargazer Rooftop Tent',
    brand: 'Howling Moon',
    category: 'rooftop-tents',
    price: 'POA',
    description: 'The Stargazer carries a clear view panel over the sleeping area, so you fall asleep under the Namib sky with real weather protection above you. One of the most requested tents in the Howling Moon lineup.',
    features: ['View panel over the sleeping area', 'Canvas build for desert conditions', 'Sleeps two adults', 'Quoted with fitment included'],
    image: '/images/products/tiles/tile-howling-moon.webp',
    inStock: true,
  },
  {
    id: 'howling-moon-lunar-rtt',
    name: 'Howling Moon Lunar Rooftop Tent',
    brand: 'Howling Moon',
    category: 'rooftop-tents',
    price: 'POA',
    description: 'The Lunar is the compact short-bed option in the Howling Moon canvas range, aimed at single-cab and smaller-roofline vehicles. Message us your vehicle details and we will quote the right tent plus fitment.',
    features: ['Compact footprint for single cabs', 'Full canvas construction', 'Lightweight closing system', 'Quoted per application'],
    image: '/images/products/tiles/tile-howling-moon.webp',
    inStock: true,
  },
  {
    id: 'quickpitch-hardshell-rtt',
    name: 'Quick Pitch Hard Shell Rooftop Tent',
    brand: 'Quick Pitch',
    category: 'rooftop-tents',
    price: 'POA',
    description: 'Quick Pitch aluminium shell tents open in around 20 seconds: unlatch, lift and you are done. A gas-strut hard shell with a mattress built in, ideal for travellers who move camp often.',
    features: ['Approximately 20 second setup', 'Aluminium hard shell', 'Built-in mattress', 'Low profile when closed'],
    image: '/images/products/quickpitch-hardshell-rtt.webp',
    inStock: true,
  },
  {
    id: 'dag-rooftop-tent',
    name: 'D.A.G Rooftop Tent',
    brand: 'D.A.G',
    category: 'rooftop-tents',
    price: 'POA',
    description: 'D.A.G rooftop tents from 4x4 Wholesalers Africa give a value-focused entry into roof-top camping without cutting corners on canvas or the frame. Quoted per vehicle with fitment at our workshop.',
    features: ['Value-focused canvas tent', 'Steel base frame', 'Ladder and flysheet included', 'Quoted per application'],
    image: '/images/products/tiles/tile-d-a-g.webp',
    inStock: true,
  },
  {
    id: 'howling-moon-awning',
    name: 'Howling Moon Side Awning',
    brand: 'Howling Moon',
    category: 'awnings',
    price: 'POA',
    description: 'A canvas side awning from Howling Moon that rolls out in seconds and gives you shade wherever you stop. Bracketed to your roof rack or canopy rails and quoted with fitment included.',
    features: ['Quick roll-out canvas shade', 'Fits roof racks and canopy rails', 'Free-standing legs included', 'Swakopmund fitment available'],
    image: '/images/products/tiles/tile-howling-moon.webp',
    inStock: true,
  },
  {
    id: 'quickpitch-270-awning',
    name: 'Quick Pitch 270 Degree Freestanding Awning',
    brand: 'Quick Pitch',
    category: 'awnings',
    price: 'POA',
    description: 'The Quick Pitch 270 wraps around the back of your vehicle for full camp-side cover and stands on its own poles once deployed. Ask us which version suits your roof rack and we will quote it fitted.',
    features: ['270 degree wrap-around cover', 'Freestanding pole setup', 'Hinged aluminium arms', 'Quoted with fitment included'],
    image: '/images/products/tiles/tile-quick-pitch.webp',
    inStock: true,
  },
  {
    id: 'dag-270-awning',
    name: 'D.A.G 270 Degree Awning',
    brand: 'D.A.G',
    category: 'awnings',
    price: 'POA',
    description: 'A 270 degree awning from the D.A.G camping line via 4x4 Wholesalers Africa: maximum shade for family camps at a sharp price point. Quoted per vehicle and fitted at Weca.',
    features: ['270 degree coverage', 'Freestanding setup', 'Heavy-duty canvas', 'Value-focused pricing'],
    image: '/images/products/tiles/tile-d-a-g.webp',
    inStock: true,
  },
  {
    id: 'rhinoman-xtreme-canopy',
    name: 'Rhinoman Xtreme Aluminium Canopy',
    brand: 'Rhinoman',
    category: 'canopies',
    price: 'POA',
    description: 'The Xtreme is the flagship aluminium canopy in the Rhinoman range: full doors all round, dust-sealed construction and roof rail ready for a rooftop tent. Built per bakkie model and quoted color-coded to your vehicle.',
    features: ['Full aluminium construction', 'Dust-sealed for gravel corridors', 'Gullwing door access options', 'Roof rail ready for racks and tents'],
    image: '/images/products/rhinoman-xtreme-canopy.webp',
    inStock: true,
  },
  {
    id: 'rhinoman-xpedition-canopy',
    name: 'Rhinoman Xpedition Canopy',
    brand: 'Rhinoman',
    category: 'canopies',
    price: 'POA',
    description: 'The Xpedition adds overlanding detail to the Rhinoman aluminium canopy line: roof rack ready, dust-sealed and sized to your load bin. Quoted color-coded per vehicle with fitment at our workshop.',
    features: ['Aluminium canopy for touring', 'Roof rail ready', 'Dust-sealed doors', 'Quoted color-coded per vehicle'],
    image: '/images/products/tiles/tile-rhinoman.webp',
    inStock: true,
  },
  {
    id: 'rhinoman-lx-canopy',
    name: 'Rhinoman LX Canopy',
    brand: 'Rhinoman',
    category: 'canopies',
    price: 'POA',
    description: 'The LX is the workhorse spec in the Rhinoman range: a clean, strong aluminium canopy for tools, camping gear and daily abuse. Available for the common bakkie models in Namibia.',
    features: ['Aluminium canopy, workhorse spec', 'Central locking option', 'Fits most double cabs', 'Quoted per application'],
    image: '/images/products/tiles/tile-rhinoman.webp',
    inStock: true,
  },
  {
    id: 'rhinoman-lt-canopy',
    name: 'Rhinoman LT Canopy',
    brand: 'Rhinoman',
    category: 'canopies',
    price: 'POA',
    description: 'The LT is the light, entry spec in the Rhinoman aluminium line for load protection on a budget. Talk to us about the current LT spec for your bakkie and we will send a quote with fitment.',
    features: ['Lightweight aluminium build', 'Entry canopy spec', 'Load-bin protection', 'Quoted per application'],
    image: '/images/products/tiles/tile-rhinoman.webp',
    inStock: true,
  },
  {
    id: 'flated-air-topper',
    name: 'Flated Air-Topper Inflatable Canopy',
    brand: 'Flated',
    category: 'canopies',
    price: 'POA',
    description: 'The Flated Air-Topper is an inflatable canopy: it pumps up in minutes, carries a real roof rack rating when fitted, and packs into a bag when you need the bakkie open. A clever solution for double-duty vehicles.',
    features: ['Inflates in minutes', 'Packs away into a storage bag', 'Roof rack compatible when fitted', 'Perfect for rental and double-duty bakkies'],
    image: '/images/products/flated-air-topper.webp',
    inStock: true,
  },
  {
    id: 'alublack-aluminium-canopy',
    name: 'AluBlack Aluminium Canopy',
    brand: 'AluBlack',
    category: 'canopies',
    price: 'POA',
    description: 'AluBlack builds aluminium canopies and flatbed trays, and their range is part of the brand lineup we carry. Send us your bakkie details for the current AluBlack spec and a fitted quote.',
    features: ['Aluminium canopies and trays', 'Part of our carried brand lineup', 'Fitment at our workshop', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-alublack.webp',
    inStock: true,
  },
  {
    id: 'maxe-stainless-roller-lid',
    name: 'MAXE Stainless Steel Roller Lid',
    brand: 'MAXE',
    category: 'canopies',
    price: 'POA',
    description: 'MAXE stainless steel roller lids lock down your load bin with a clean, low profile that keeps the bakkie looking factory. Quoted per load bin and fitted at Weca.',
    features: ['Stainless steel construction', 'Locking roller shutter', 'Low profile factory look', 'Quoted per load bin'],
    image: '/images/products/tiles/tile-maxe.webp',
    inStock: true,
  },
  {
    id: 'frontrunner-slimline-ii',
    name: 'Front Runner Slimline II Roof Rack',
    brand: 'Front Runner',
    category: 'canopies',
    price: 'POA',
    description: 'The Slimline II is the roof rack platform of choice for overlanders: low profile, modular and backed by a huge accessory ecosystem. Quoted as a full kit for your exact vehicle with fitment included.',
    features: ['Vehicle-specific Slimline II kits', 'Modular accessory ecosystem', 'Rooftop tent ready', 'Quoted with fitment included'],
    image: '/images/products/frontrunner-slimline-ii.webp',
    inStock: true,
  },
  {
    id: 'induna-lc70-console',
    name: 'Induna LC70 Series Roof Console',
    brand: 'Induna 4x4',
    category: 'canopies',
    price: 'POA',
    description: 'Induna builds the roof console that Land Cruiser 70 Series owners keep asking for: switch panels, storage and a clean fit above the windshield. Quoted for your specific 70 Series model.',
    features: ['Made for LC70 Series cabins', 'Switch panel provision', 'Overhead storage', 'Quoted per model'],
    image: '/images/products/tiles/tile-induna-4x4.webp',
    inStock: true,
  },
  {
    id: 'furnlock-fridge-slide',
    name: 'Furnlock Heavy-Duty Fridge Slide',
    brand: 'Furnlock & Slide',
    category: 'canopies',
    price: 'POA',
    description: 'Furnlock and Slide build the heavy-duty drawer runners and fridge slides that survive corrugations and load. Tell us your fridge model and load bin and we will quote the right slide setup.',
    features: ['Heavy-duty locking runners', 'Fridge slide kits', 'Survives rough corrugated roads', 'Quoted to your fridge and bin'],
    image: '/images/products/tiles/tile-furnlock-slide.webp',
    inStock: true,
  },
  {
    id: 'eezi-slide-drawer-system',
    name: 'Eezi Slide Drawer System',
    brand: 'Eezi Slide',
    category: 'canopies',
    price: 'POA',
    description: 'Eezi Slide drawer systems turn your load bin into organized storage with lockable drawers and fridge slide options, supplied through Bakkie and Outdoor. Quoted per vehicle with fitment.',
    features: ['Lockable storage drawers', 'Fridge slide options', 'Carpeted steel construction', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-eezi-slide.webp',
    inStock: true,
  },
  {
    id: 'fredlin-rtt-hoist',
    name: 'Fredlin Rooftop Tent Hoist',
    brand: 'Fredlin Hoists',
    category: 'canopies',
    price: 'POA',
    description: 'The Fredlin hoist lifts your rooftop tent onto and off the vehicle by yourself, then stores it against the garage roof. The answer for everyone who camps hard but hates the weekly tent wrestle.',
    features: ['One-person tent loading', 'Garage roof storage', 'Part of our carried brand lineup', 'Quoted on request'],
    image: '/images/products/tiles/tile-fredlin-hoists.webp',
    inStock: true,
  },
  {
    id: 'wildog-hunter-front-bumper',
    name: 'Wildog Hunter Front Replacement Bumper',
    brand: 'Wildog',
    category: 'bumpers',
    price: 'POA',
    description: 'The Wildog Hunter is a full front-end replacement bumper built for African conditions, with winch provision and rated recovery points. CNC-cut and engineered per vehicle, then fitted and aligned at our Swakopmund workshop.',
    features: ['Full replacement bumper', 'Winch mounting provision', 'Rated recovery points', 'Vehicle-specific engineering', 'Fitted at Weca'],
    image: '/images/products/wildog-hunter-front-bumper.webp',
    inStock: true,
  },
  {
    id: 'wildog-rear-bumper-carrier',
    name: 'Wildog Rear Bumper & Wheel Carrier',
    brand: 'Wildog',
    category: 'bumpers',
    price: 'POA',
    description: 'Wildog rear bumpers with spare wheel carriers take the weight of a full-size spare and a jerry can pair off your tailgate and put it on the chassis where it belongs. Quoted per vehicle with fitment included.',
    features: ['Chassis-mounted wheel carrier', 'Jerry can and recovery points', 'Matched to Wildog front bumpers', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-wildog.webp',
    inStock: true,
  },
  {
    id: 'wildog-side-steps',
    name: 'Wildog Side Steps & Protection Plates',
    brand: 'Wildog',
    category: 'bumpers',
    price: 'POA',
    description: 'Wildog side steps and underbody protection plates shield your sills and drivetrain from rocks, stumps and urban parking. Quoted as a set for your vehicle with brackets and fitment included.',
    features: ['CNC-cut steel construction', 'Sill and drivetrain protection', 'Vehicle-specific brackets', 'Quoted as a fitted set'],
    image: '/images/products/tiles/tile-wildog.webp',
    inStock: true,
  },
  {
    id: 'gobix-3d-bull-bar',
    name: 'Gobi-X 3D-Scanned Bull Bar',
    brand: 'Gobi-X',
    category: 'bumpers',
    price: 'POA',
    description: 'Gobi-X 3D-scans each vehicle front end, so their bull bars follow the body lines and mount clean: winch provision, recovery points and light integration, with a stealth rear carrier to match. Strong following among Land Cruiser and Hilux owners.',
    features: ['3D-scanned per vehicle model', 'Winch and light provision', 'Rated recovery points', 'Stealth rear carrier available'],
    image: '/images/products/gobix-3d-bull-bar.webp',
    inStock: true,
  },
  {
    id: 'gobix-dual-swing-carrier',
    name: 'Gobi-X Dual Swing Rear Carrier',
    brand: 'Gobi-X',
    category: 'bumpers',
    price: 'POA',
    description: 'The Gobi-X dual swing rear carrier carries spare wheel and camping load on separate swinging arms, built for the Land Cruiser 76, 78, 79 and 300 family plus other applications. Quoted per vehicle with fitment.',
    features: ['Dual swing arms', 'Spare wheel plus load carrying', 'Land Cruiser specialist fitment', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-gobi-x.webp',
    inStock: true,
  },
  {
    id: 'onca-toyota-front-bumper',
    name: 'Onca Offroad Toyota Front Bumper',
    brand: 'Onca Offroad',
    category: 'bumpers',
    price: 'POA',
    description: 'Onca Offroad are Toyota specialists with bumpers and protection across more than 100 Toyota applications, from Hilux and Fortuner to the Land Cruiser family. Quoted for your exact model and fitted at Weca.',
    features: ['Toyota specialist range', '100+ Toyota applications', 'Winch provision options', 'Quoted and fitted at Weca'],
    image: '/images/products/onca-toyota-bumper.webp',
    inStock: true,
  },
  {
    id: 'onca-side-steps-rails',
    name: 'Onca Offroad Side Steps & Rails',
    brand: 'Onca Offroad',
    category: 'bumpers',
    price: 'POA',
    description: 'Onca side steps and rock sliders in matching Toyota-spec steel: a clean step for daily use, real protection on the trail. Quoted per model to match their bumper range.',
    features: ['Matching Toyota-spec steel', 'Step plus slider protection', 'Model-specific brackets', 'Quoted per application'],
    image: '/images/products/tiles/tile-onca-offroad.webp',
    inStock: true,
  },
  {
    id: 'mcc-front-winch-bar',
    name: 'MCC Front Winch Bar',
    brand: 'MCC',
    category: 'bumpers',
    price: 'POA',
    description: 'MCC winch bars via Winch-In SA, the exclusive MCC importer: full replacement steel bars with winch mounting, loop-style protections and driving light provision. Quoted per vehicle and fitted in Swakopmund.',
    features: ['Exclusive MCC import route', 'Winch mounting as standard', 'Driving light provision', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-mcc.webp',
    inStock: true,
  },
  {
    id: 'piak-front-bumper',
    name: 'Piak Front Bumper',
    brand: 'Piak',
    category: 'bumpers',
    price: 'POA',
    description: 'Piak bumpers come to us through Opposite Lock Africa: stout steel front bars with winch options for the popular bakkie and SUV lines. Ask us for the Piak application list for your vehicle.',
    features: ['Supplied via Opposite Lock Africa', 'Winch provision options', 'Popular bakkie and SUV applications', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-piak.webp',
    inStock: true,
  },
  {
    id: 'summit-front-bumper',
    name: 'Summit 4x4 Front Bumper',
    brand: 'Summit 4x4',
    category: 'bumpers',
    price: 'POA',
    description: 'Summit 4x4 front and rear bars, including applications for the latest Hilux generation: full replacement steel with winch provision and recovery points. Quoted per vehicle with fitment at our workshop.',
    features: ['Covers current model applications', 'Winch provision', 'Recovery points', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-summit-4x4.webp',
    inStock: true,
  },
  {
    id: 'maxe-stainless-front-bumper',
    name: 'MAXE Stainless Steel Front Bumper',
    brand: 'MAXE',
    category: 'bumpers',
    price: 'POA',
    description: 'MAXE stainless steel front bumpers and side steps for bakkie owners who want protection without the corrosion worry, especially in coastal Swakopmund air. Quoted per vehicle, polished or powder coated.',
    features: ['Stainless steel build', 'Coastal corrosion resistance', 'Matching side steps available', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-maxe.webp',
    inStock: true,
  },
  {
    id: 'africa-longhorn-jeep-armour',
    name: 'Africa Longhorn Jeep JK/JL/JT Armour',
    brand: 'Africa Longhorn',
    category: 'bumpers',
    price: 'POA',
    description: 'Africa Longhorn builds bumpers and armour specifically for the Jeep Wrangler JK and JL and the Gladiator JT, plus GWM P-Series applications. Quoted for your Jeep with fitment at Weca.',
    features: ['Jeep JK, JL and Gladiator JT range', 'GWM P-Series applications', 'Steel bumpers and armour', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-africa-longhorn.webp',
    inStock: true,
  },
  {
    id: 'africa-longhorn-gwm-armour',
    name: 'Africa Longhorn GWM P-Series Armour',
    brand: 'Africa Longhorn',
    category: 'bumpers',
    price: 'POA',
    description: 'Real 4x4 armour for the GWM P-Series, a vehicle most accessory brands ignore. Africa Longhorn covers it with bumpers and protection pieces quoted and fitted through our workshop.',
    features: ['GWM P-Series specific range', 'Front bumpers and armour', 'Hard-to-find applications', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-africa-longhorn.webp',
    inStock: true,
  },
  {
    id: 'ratel-bosbumper',
    name: 'Ratel Bosbumper',
    brand: 'Ratel',
    category: 'bumpers',
    price: 'POA',
    description: 'The Ratel Bosbumper is part of the brand lineup we carry: robust front protection in the South African tradition, quoted per vehicle and fitted by our team.',
    features: ['Part of our carried brand lineup', 'Robust steel front protection', 'Fitted at our workshop', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-ratel.webp',
    inStock: true,
  },
  {
    id: 'dag-snorkel',
    name: 'D.A.G 4x4 Snorkel',
    brand: 'D.A.G',
    category: 'bumpers',
    price: 'POA',
    description: 'A D.A.G snorkel lifts your engine air intake to roof height for dust and water crossings, model-matched to your vehicle. Quoted with templates, hardware and fitment included.',
    features: ['Raises air intake to roof height', 'Model-specific fitment', 'UV-stable plastic', 'Quoted with fitment included'],
    image: '/images/products/tiles/tile-d-a-g.webp',
    inStock: true,
  },
  {
    id: 'toughdog-foam-cell-kit',
    name: 'Tough Dog Foam Cell Suspension Kit',
    brand: 'Tough Dog',
    category: 'suspension',
    price: 'POA',
    description: 'Tough Dog foam cell shocks and matched springs are the backbone of our suspension fitments: comfortable on corrugations, strong under load, proven across Namibia. Quoted as a complete kit per vehicle with fitment at Weca.',
    features: ['Foam cell shock technology', 'Matched springs per vehicle', 'Load and lift options', 'Complete kit with fitment included'],
    image: '/images/products/toughdog-foam-cell-kit.webp',
    inStock: true,
  },
  {
    id: 'toughdog-adjustable-shocks',
    name: 'Tough Dog Adjustable Shock Range',
    brand: 'Tough Dog',
    category: 'suspension',
    price: 'POA',
    description: 'For owners who want to tune their ride: Tough Dog adjustable shocks let you dial damping to the load and the road, from daily driving to loaded touring. Quoted per vehicle with our fitment recommendation.',
    features: ['Adjustable damping', 'Tune for load and terrain', 'Big-bore options available', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-tough-dog.webp',
    inStock: true,
  },
  {
    id: 'fox-20-performance-shock',
    name: 'Fox 2.0 Performance Series Shock',
    brand: 'Fox',
    category: 'suspension',
    price: 'POA',
    description: 'Fox 2.0 Performance Series shocks via Ride Fox Africa: the upgrade that smooths out washboard roads without turning your bakkie into a race car. Quoted per vehicle and fitted with the right spring rate for your load.',
    features: ['Fox 2.0 Performance Series', 'Supplied via Ride Fox Africa', 'Smooths corrugations and washboard', 'Quoted with matched springs'],
    image: '/images/products/fox-20-performance-shock.webp',
    inStock: true,
  },
  {
    id: 'fox-25-factory-race-shock',
    name: 'Fox 2.5 Factory Race Series Shock',
    brand: 'Fox',
    category: 'suspension',
    price: 'POA',
    description: 'The Fox 2.5 Factory Race Series is the serious upgrade: larger bodies, more oil capacity and damping control for fast gravel, heavy builds and dune work. Quoted per application through Ride Fox Africa.',
    features: ['Fox 2.5 Factory Race Series', 'Larger body and oil capacity', 'For fast gravel and heavy builds', 'Quoted per application'],
    image: '/images/products/tiles/tile-fox.webp',
    inStock: true,
  },
  {
    id: 'efs-suspension-kit',
    name: 'EFS Suspension Kit',
    brand: 'EFS',
    category: 'suspension',
    price: 'POA',
    description: 'EFS suspension kits arrive complete: matched springs and dampers, bump stops and hardware per vehicle. A tidy single-source lift for everyday 4x4s that see weekend trails and daily school runs.',
    features: ['Complete matched kit', 'Springs, dampers and hardware', 'Comfort and load options', 'Quoted with fitment included'],
    image: '/images/products/tiles/tile-efs.webp',
    inStock: true,
  },
  {
    id: 'profender-suspension-kit',
    name: 'Profender Suspension Kit',
    brand: 'Profender',
    category: 'suspension',
    price: 'POA',
    description: 'Profender suspension, supplied to us through Opposite Lock Africa: a strong mid-range option with shock and spring kits for common bakkies and 4x4s. Quoted per vehicle with our fitment recommendation.',
    features: ['Supplied via Opposite Lock Africa', 'Shock and spring kits', 'Mid-range touring option', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-profender.webp',
    inStock: true,
  },
  {
    id: 'amadaxtreme-rally-kit',
    name: 'AmadaXtreme Rally Suspension Kit',
    brand: 'AmadaXtreme',
    category: 'suspension',
    price: 'POA',
    description: 'AmadaXtreme builds rally-grade suspension for drivers who ask more of their vehicle than a touring kit should give. Tell us the vehicle, the load and the terrain and we will quote the right spec.',
    features: ['Rally-grade components', 'Built for hard, fast terrain', 'Speced to vehicle and load', 'Quoted per application'],
    image: '/images/products/tiles/tile-amadaxtreme.webp',
    inStock: true,
  },
  {
    id: 'runva-ewx-winch',
    name: 'Runva EWX Series Electric Winch',
    brand: 'Runva',
    category: 'winches',
    price: 'POA',
    description: 'Runva electric winches via Winch-In SA, one of the largest Runva importers in South Africa: strong pull ratings, synthetic rope options and controllers, quoted with a bumper or mounting plate to fit your vehicle.',
    features: ['EWX series electric winches', 'Synthetic rope options', 'Wired and wireless control', 'Quoted with mounting solution'],
    image: '/images/products/runva-ewx-winch.webp',
    inStock: true,
  },
  {
    id: 'warn-zeon-winch',
    name: 'WARN Zeon Electric Winch',
    brand: 'WARN',
    category: 'winches',
    price: 'POA',
    description: 'WARN is the name in winching and the Zeon range is its modern flagship: fast line speed, sealed control pack and premium build. We stock and quote WARN through our winch fitment service.',
    features: ['WARN Zeon range', 'Fast line speed', 'Sealed control pack', 'Quoted with mounting and fitment'],
    image: '/images/products/warn-zeon-winch.webp',
    inStock: true,
  },
  {
    id: 'lightforce-driving-lights',
    name: 'Lightforce LED Driving Lights',
    brand: 'Lightforce',
    category: 'lighting',
    price: 'POA',
    description: 'Lightforce LED driving lights, supplied through Opposite Lock Africa: serious reach for Namibian night driving, in the tough hydrophobic housings the brand is known for. Quoted with wiring looms and fitment.',
    features: ['Long-range LED driving lights', 'Supplied via Opposite Lock Africa', 'Tough housings for African conditions', 'Quoted with wiring and fitment'],
    image: '/images/products/tiles/tile-lightforce.webp',
    inStock: true,
  },
  {
    id: 'dag-led-light-bars',
    name: 'D.A.G LED Light Bars',
    brand: 'D.A.G',
    category: 'lighting',
    price: 'POA',
    description: 'D.A.G LED light bars from the 4x4 Wholesalers Africa line: single and dual row bars in the popular sizes, sharp value for work and play. Quoted with brackets, wiring and fitment at Weca.',
    features: ['Single and dual row bars', 'Popular sizes in stock flow', 'Sharp value lighting', 'Quoted with wiring and fitment'],
    image: '/images/products/tiles/tile-d-a-g.webp',
    inStock: true,
  },
  {
    id: 'ecoflow-delta-power-station',
    name: 'EcoFlow DELTA Power Station',
    brand: 'EcoFlow',
    category: 'power',
    price: 'POA',
    description: 'The EcoFlow DELTA series runs fridges, lights and tools at camp and charges fast between stops. Part of the EcoFlow brand lineup we carry: ask us which capacity suits your setup and we will quote it.',
    features: ['High-capacity portable power', 'Fast recharge between stops', 'Runs fridges, lights and tools', 'Quoted per model'],
    image: '/images/products/ecoflow-delta.webp',
    inStock: true,
  },
  {
    id: 'ecoflow-river-power-station',
    name: 'EcoFlow RIVER Power Station',
    brand: 'EcoFlow',
    category: 'power',
    price: 'POA',
    description: 'The EcoFlow RIVER series is the compact sibling in the range: light enough to move between vehicle and camp, strong enough for a fridge and the essentials. Quoted per model with our recommendation.',
    features: ['Compact portable power', 'Fridge and essentials runtime', 'Light and movable', 'Quoted per model'],
    image: '/images/products/tiles/tile-ecoflow.webp',
    inStock: true,
  },
  {
    id: 'the4x4store-dual-battery',
    name: 'Dual Battery System',
    brand: 'The 4x4 Store',
    category: 'power',
    price: 'POA',
    description: 'A proper dual battery system keeps the fridge cold without ever risking a cranking battery, built from DC-DC charging components specified by The 4x4 Store. Quoted for your vehicle and fitted to our standard.',
    features: ['DC-DC charging', 'Fridge-safe isolated second battery', 'Specification by The 4x4 Store', 'Quoted with full fitment'],
    image: '/images/products/tiles/tile-the-4x4-store.webp',
    inStock: true,
  },
  {
    id: 'dometic-fridge-freezer',
    name: 'Dometic Fridge-Freezer',
    brand: 'Dometic',
    category: 'refrigeration',
    price: 'POA',
    description: 'Dometic fridge-freezers are the touring standard: efficient compressors, tough housings and sizes from day-trip coolers to family double compartments. Quoted with slides, wiring and fitment if you want the full setup.',
    features: ['Compressor fridge-freezers', 'Single and double compartment sizes', '12V and 220V operation', 'Quoted with slide and wiring options'],
    image: '/images/products/tiles/tile-dometic.webp',
    inStock: true,
  },
  {
    id: 'dag-camping-fridge',
    name: 'D.A.G Camping Fridge',
    brand: 'D.A.G',
    category: 'refrigeration',
    price: 'POA',
    description: 'The D.A.G camping fridge line from 4x4 Wholesalers Africa covers the popular capacities at a value price point, a strong match for a slide and dual battery setup. Quoted per model.',
    features: ['Value-focused camping fridges', 'Popular capacities', 'Pairs with our slide systems', 'Quoted per model'],
    image: '/images/products/tiles/tile-d-a-g.webp',
    inStock: true,
  },
  {
    id: 'moremi-camping-trailer',
    name: 'Moremi Camping Trailer',
    brand: 'Moremi',
    category: 'camping',
    price: 'POA',
    description: 'Moremi camping trailers and custom campers, part of the brand lineup we carry: base camp capacity behind your 4x4 with tent, kitchen and storage built in. Talk to us about current builds and lead times.',
    features: ['Camping trailers and custom campers', 'Base camp capacity', 'Part of our carried brand lineup', 'Quoted on current builds'],
    image: '/images/products/tiles/tile-moremi.webp',
    inStock: true,
  },
  {
    id: 'tougher-canvas-seat-covers',
    name: 'Tougher Canvas Seat Covers',
    brand: 'Tougher',
    category: 'seat-covers',
    price: 'POA',
    description: 'Tougher canvas seat covers are made for African work and play: heavy canvas, airbag-safe stitching and a fit per vehicle model. Quoted for your seats and fitted while you wait in most cases.',
    features: ['Heavy-duty canvas', 'Airbag-safe stitching', 'Vehicle-specific patterns', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-tougher.webp',
    inStock: true,
  },
  {
    id: 'escape-gear-seat-covers',
    name: 'Escape Gear Custom-Fit Seat Covers',
    brand: 'Escape Gear',
    category: 'seat-covers',
    price: 'POA',
    description: 'Escape Gear seat covers are custom cut per vehicle, year and seat configuration, so they fit like upholstery rather than a throw-over. Swakopmund dust and wet suits meet their match. Quoted per vehicle.',
    features: ['Custom cut per vehicle and year', 'Seat-configuration specific', 'Proven dust and moisture protection', 'Quoted per vehicle'],
    image: '/images/products/escape-gear-seat-covers.webp',
    inStock: true,
  },
  {
    id: 'beesdam-seat-covers',
    name: 'Beesdam Premium Seat Covers',
    brand: 'Beesdam',
    category: 'seat-covers',
    price: 'POA',
    description: 'Beesdam premium seat covers round out our seat cover lineup for owners who want a dressed-up cabin that still handles dirt and dogs. Quoted per vehicle model.',
    features: ['Premium finish options', 'Dust and pet friendly builds', 'Vehicle-specific fit', 'Quoted per vehicle'],
    image: '/images/products/tiles/tile-beesdam.webp',
    inStock: true,
  },
];



// Services
export const services: Service[] = [
  {
    id: '1',
    name: 'Rooftop Tent Installation',
    description: 'Professional installation of rooftop tents including roof rack mounting, wiring for accessories, and demonstration.',
    startingPrice: 'N$ 2,500',
    duration: '2-4 hours',
    features: ['Professional mounting', 'Wiring integration', 'Demonstration included', 'Warranty on installation', 'Safety inspection'],
    image: '/images/gallery/rooftent_with_sparewheel_01.webp',
    imageAlt: 'Customer Toyota Land Cruiser 70 Series overland build',
  },
  {
    id: '2',
    name: 'Suspension System Fitment',
    description: 'Complete suspension upgrades including shocks, springs, and lift kit installation with professional alignment.',
    startingPrice: 'N$ 4,500',
    duration: '4-6 hours',
    features: ['Full system install', 'Wheel alignment', 'Test drive included', 'Adjustment service', 'Parts warranty'],
    image: '/images/gallery/roofrack_70series_03.webp',
    imageAlt: 'Falcon shock absorber and coil spring ready for fitment',
  },
  {
    id: '3',
    name: 'Bumper Replacement',
    description: 'Front and rear bumper installation with winch mounting, light integration, and sensor calibration.',
    startingPrice: 'N$ 3,500',
    duration: '3-5 hours',
    features: ['Winch ready', 'Light integration', 'Sensor calibration', 'Paint matching available', 'Tow bar install'],
    image: '/images/gallery/awning_desert_01.webp',
    imageAlt: 'Toyota Hilux with steel front bumper and TRD accents',
  },
  {
    id: '4',
    name: 'Custom Canopy Building',
    description: 'Bespoke canopy solutions designed and built to your specifications for work or adventure.',
    startingPrice: 'On Request',
    duration: '1-3 weeks',
    features: ['Custom design', 'Material options', 'Interior fitout', 'Electrical integration', 'Paint matching'],
    image: '/images/gallery/rooftent_dual_awning.webp',
    imageAlt: 'Custom rear storage box fabricated for a Suzuki Jimny',
  },
  {
    id: '5',
    name: 'Vehicle Upgrades & Accessories',
    description: 'Installation of various accessories including lighting, snorkels, roof racks, and more.',
    startingPrice: 'N$ 1,500',
    duration: '1-4 hours',
    features: ['Wide range of accessories', 'Professional fitment', 'Electrical work', 'Testing included', 'Clean finish'],
    image: '/images/gallery/rooftent_with_awning_01.webp',
    imageAlt: 'Nissan Navara with bull bar and Hella LED light',
  },
  {
    id: '6',
    name: 'Repair Services',
    description: 'Diagnostic and repair services for 4x4 systems, suspension, and accessories.',
    startingPrice: 'N$ 850',
    duration: 'Varies',
    features: ['Diagnostics', 'OEM parts available', 'Expert technicians', 'Transparent pricing', 'Warranty on repairs'],
    image: '/images/gallery/rooftent_desert_04.webp',
    imageAlt: 'Customer Toyota Hilux parked outside the Weca workshop',
  },
  {
    id: '7',
    name: 'Tyre Fitting & Balancing',
    description: 'Professional tyre fitting, balancing, and alignment for all 4x4 vehicles.',
    startingPrice: 'N$ 1,200',
    duration: '1-2 hours',
    features: ['All tyre types', 'Computer balancing', 'Alignment check', 'Pressure monitoring', 'Disposal included'],
    image: '/images/gallery/awning_patrol.webp',
    imageAlt: 'Maxxis Razr MT tyres stacked and ready for fitment',
  },
  {
    id: '8',
    name: 'Custom Vehicle Builds',
    description: 'Complete vehicle builds from ground up. Turn your 4x4 into the ultimate adventure machine.',
    startingPrice: 'On Request',
    duration: '2-8 weeks',
    features: ['Full customization', 'Project management', 'Quality parts', 'Unique builds', 'Documentation'],
    image: '/images/gallery/rooftent_desert_02.webp',
    imageAlt: 'Customer Jeep Wrangler custom build with front bumper and beadlock wheels',
  },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Johan van der Merwe',
    location: 'Windhoek',
    rating: 5,
    text: 'Weca installed a complete suspension system on my Toyota Hilux. The difference in handling on Namibian gravel roads is incredible. Professional service and fair pricing. Highly recommended!',
    service: 'Suspension System Fitment',
    vehicle: 'Toyota Hilux',
    date: '2024-03-15',
  },
  {
    id: '2',
    name: 'Anna-Marie Strauss',
    location: 'Swakopmund',
    rating: 5,
    text: 'Bought my Tentco rooftop tent from Weca. The team helped me choose the right setup and installed it perfectly. Now my family can enjoy camping in comfort anywhere in Namibia!',
    service: 'Rooftop Tent Installation',
    vehicle: 'Land Rover Defender',
    date: '2024-02-28',
  },
  {
    id: '3',
    name: 'Michael Properties',
    location: 'Walvis Bay',
    rating: 5,
    text: 'We outfitted our entire fleet of tour vehicles through Weca. Their expertise in 4x4 modifications and competitive pricing made them the obvious choice. Excellent after-sales support.',
    service: 'Custom Vehicle Builds',
    vehicle: 'Fleet (5 vehicles)',
    date: '2024-01-20',
  },
  // ... more testimonials could be added, but keeping concise for now
];

// FAQ entries shown on the Services page accordion AND rendered as
// FAQPage JSON-LD structured data for SEO. If you change the questions
// here, both the UI and the schema update automatically.
export const faqs: { question: string; answer: string }[] = [
  {
    question: 'How long does a typical suspension installation take?',
    answer:
      'A complete suspension system installation typically takes 4 to 6 hours. More complex setups with custom lift kits, replacement bushes, or additional fabrication may require a full day. We will give you a realistic timeframe when we quote.',
  },
  {
    question: 'Do you offer warranties on your installations?',
    answer:
      'Yes. All our installations come with a workmanship warranty. Most products we supply also carry the manufacturer warranty. We will tell you exactly what is covered before we start the job.',
  },
  {
    question: 'Can I bring my own parts for installation?',
    answer:
      'We prefer to supply the parts ourselves so we can verify quality, fit, and warranty coverage. If you already have parts, we can discuss it on a case-by-case basis. Customer-supplied parts are not covered by our workmanship warranty if the part itself fails.',
  },
  {
    question: 'Do I need to book an appointment?',
    answer:
      'Walk-ins are welcome for basic enquiries, but installations and fitments must be booked in advance so we can allocate a bay and a technician. WhatsApp us on +264 81 169 1942 to book a slot.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, bank transfers (EFT), and major credit and debit cards. For larger custom builds, we agree a staged payment schedule in writing before work begins.',
  },
  {
    question: 'Do you work on all vehicle types?',
    answer:
      'We specialise in 4x4 and double-cab vehicles including Toyota Hilux and Land Cruiser, Ford Ranger, Nissan Navara and Patrol, Isuzu D-Max, Land Rover Defender, Jeep, and VW Amarok. If you are not sure, just ask.',
  },
];


// Gallery Items - POPULATED WITH 47+ REAL ASSETS
export const galleryItems: GalleryItem[] = [
  // BUMPERS
  { id: 'g01', title: 'Toyota Hilux with Steel Front Bumper and TRD Accents', category: 'bumpers', vehicle: 'Toyota Hilux', description: 'Grey Toyota Hilux fitted with a black steel front bumper, red TRD accents, and off-road tyres, photographed outside a commercial building in Swakopmund Industrial.', image: '/images/gallery/awning_desert_01.webp', workDone: ['Steel Front Bumper', 'TRD Accents', 'Off-Road Tyres'], date: '2024-03-10' },
  { id: 'g03', title: 'Toyota Hilux Bull Bar Outside Weca Workshop', category: 'bumpers', vehicle: 'Toyota Hilux', description: 'White Toyota Hilux fitted with a large black bull bar and off-road tyres, parked outside the Weca Offroad Centre workshop in Swakopmund Industrial.', image: '/images/gallery/rooftent_desert_04.webp', workDone: ['Bull Bar Install', 'Off-Road Tyres'], date: '2024-02-20' },
  { id: 'g08', title: 'Jeep Wrangler Bull Bar with Winch and Recovery Hooks', category: 'bumpers', vehicle: 'Jeep Wrangler', description: 'Tan Jeep Wrangler fitted with a black bull bar, integrated winch with red control knob, and two red recovery hooks. Photographed outside the workshop with a Teraflex Suspensions windshield visor.', image: '/images/gallery/workshop_sign_01.webp', workDone: ['Bull Bar', 'Winch', 'Recovery Hooks'], date: '2024-04-20' },
  { id: 'g24', title: 'Toyota Hilux with Aftermarket Bull Bar', category: 'bumpers', vehicle: 'Toyota Hilux', description: 'White Toyota Hilux pickup truck fitted with a black aftermarket bull bar, photographed in an outdoor commercial lot.', image: '/images/gallery/shop_sign_orange.webp', workDone: ['Bull Bar Install'], date: '2024-07-01' },
  { id: 'g27', title: 'Nissan Navara Bull Bar with Hella LED Light', category: 'bumpers', vehicle: 'Nissan Navara', description: 'Grey Nissan Navara pickup truck fitted with a large black aftermarket bull bar and integrated Hella LED light, photographed outside the Weca workshop.', image: '/images/gallery/rooftent_with_awning_01.webp', workDone: ['Bull Bar', 'Hella LED Light'], date: '2024-07-15' },
  // FULL-BUILD
  { id: 'g05', title: 'Jeep Wrangler Rubicon on Sand', category: 'full-build', vehicle: 'Jeep Wrangler Rubicon', description: 'Grey Jeep Wrangler Rubicon photographed on a sandy dirt mound during off-road testing outside the workshop.', image: '/images/gallery/rooftent_safari_03.webp', workDone: ['Off-Road Testing'], date: '2024-04-05' },
  { id: 'g09', title: 'Lime Green Jeep Wrangler Sahara on Bighorn Tyres', category: 'full-build', vehicle: 'Jeep Wrangler Sahara', description: 'Lime green Jeep Wrangler Sahara with a black hardtop, fitted with Bighorn off-road tyres. Photographed outside the Weca workshop on brick paving.', image: '/images/gallery/roofrack_70series_01.webp', workDone: ['Off-Road Tyres', 'Custom Colour'], date: '2024-04-25' },
  { id: 'g10', title: 'White Jeep Wrangler with Red Beadlock Wheels', category: 'full-build', vehicle: 'Jeep Wrangler Unlimited', description: 'White Jeep Wrangler Unlimited with black hood, fender flares, and front bumper, fitted with red beadlock wheels. Photographed at the Weca workshop.', image: '/images/gallery/rooftent_desert_02.webp', workDone: ['Front Bumper', 'Beadlock Wheels', 'Fender Flares'], date: '2024-05-01' },
  { id: 'g11', title: 'Toyota Land Cruiser 79 Series Pickup Build', category: 'full-build', vehicle: 'Toyota Land Cruiser 79 Series', description: 'White Toyota Land Cruiser 79 Series pickup truck fitted with a black bull bar, photographed outside the Weca Adventure Centre workshop.', image: '/images/gallery/roofrack_70series_04.webp', workDone: ['Bull Bar Install', 'Workshop Build'], date: '2024-05-05' },
  { id: 'g12', title: 'SACCS Race Truck #363 in Desert Sunset', category: 'full-build', vehicle: 'Race Truck', description: 'Red and white SACCS race truck #363, driven by Elsabe Verho and Schalk Burger, sponsored by Prince Xtreme, Total Quartz, Pirelli, and Clipsa. Photographed in the Namib desert at sunset.', image: '/images/gallery/rooftent_desert_05.webp', workDone: ['Race Build', 'Desert Testing'], date: '2024-05-05' },
  { id: 'g13', title: 'Nitto Trail Grappler Tyre Close-Up', category: 'full-build', vehicle: 'Showcase', description: 'Close-up of a Nitto Trail Grappler off-road tyre (LT285/70R17) showing the aggressive blocky tread pattern and sidewall branding. One of the tyre brands we carry and recommend.', image: '/images/gallery/awning_extended_02.webp', workDone: ['Tyre Supply'], date: '2024-05-10' },
  { id: 'g14', title: 'Maxxis Razr MT Tyre Stack', category: 'full-build', vehicle: 'Showcase', description: 'A stack of four new Maxxis Razr MT mud-terrain tyres (LT285/75R16) in the Weca workshop, ready for fitment to customer vehicles.', image: '/images/gallery/awning_patrol.webp', workDone: ['Tyre Supply', 'Fitment Ready'], date: '2024-05-10' },
  { id: 'g17', title: 'Bighorn Off-Road Tyre on Red Rim', category: 'full-build', vehicle: 'Showcase', description: 'Close-up of a Bighorn off-road tyre (425/85) with deep treads mounted on a red rim, with a Goodyear strap visible. Photographed in the Weca workshop.', image: '/images/gallery/roofrack_70series_02.webp', workDone: ['Tyre Supply', 'Wheel Fitment'], date: '2024-05-25' },
  { id: 'g18', title: 'Maroon Jeep Wrangler Rubicon at Wash Bay', category: 'full-build', vehicle: 'Jeep Wrangler Rubicon', description: 'Maroon Jeep Wrangler Rubicon with BFGoodrich tyres and MOPAR side step, freshly washed under a green-roofed shelter. Photographed outside the Weca workshop.', image: '/images/gallery/rooftent_safari_01.webp', workDone: ['Vehicle Wash', 'Customer Vehicle'], date: '2024-06-01' },
  { id: 'g21', title: 'Black Jeep Wrangler with Snorkel and Recovery Gear', category: 'full-build', vehicle: 'Jeep Wrangler', description: 'Matte black Jeep Wrangler with red-rimmed beadlock wheels, snorkel, front bull bar with red D-shackles, and Opposite Lock decals, parked outside the Weca workshop.', image: '/images/gallery/rooftent_dual_01.webp', workDone: ['Bull Bar', 'Snorkel', 'Recovery Shackles', 'Beadlock Wheels'], date: '2024-06-15' },
  { id: 'g22', title: 'Toyota FJ Cruiser on Sand Track', category: 'full-build', vehicle: 'Toyota FJ Cruiser', description: 'Beige and black Toyota FJ Cruiser with ARB 4x4 accessories and a Monster front bumper, photographed on a sandy desert track during off-road testing.', image: '/images/gallery/awning_extended_01.webp', workDone: ['ARB Accessories', 'Off-Road Testing'], date: '2024-06-20' },
  { id: 'g25', title: 'Silver Jeep Wrangler Soft Top For Sale', category: 'full-build', vehicle: 'Jeep Wrangler', description: 'Silver Jeep Wrangler soft top with aftermarket wheels, displayed for sale at N$129,999. Photographed at the Weca workshop with a For Sale sign in the windshield.', image: '/images/gallery/rooftent_desert_03.webp', workDone: ['Vehicle Sales', 'Aftermarket Wheels'], date: '2024-07-05' },
  { id: 'g29', title: 'Jeep Wrangler Desert Run', category: 'full-build', vehicle: 'Jeep Wrangler', description: 'White Jeep Wrangler alongside other modified Jeeps during a desert trail run, photographed on sandy terrain.', image: '/images/gallery/entrance_sign.webp', workDone: ['Off-Road Event', 'Customer Vehicles'], date: '2024-07-20' },
  { id: 'g30', title: 'Jeep Wrangler with Maxxis and Ironman 4x4 Accessories', category: 'full-build', vehicle: 'Jeep Wrangler', description: 'Matte grey Jeep Wrangler with a blue hood, fitted with Maxxis tyres, Ironman 4x4 accessories, and a Rhino-Rack roof rack. Photographed outside a commercial building near the workshop.', image: '/images/gallery/brand_sign_metal.webp', workDone: ['Maxxis Tyres', 'Ironman 4x4 Accessories', 'Roof Rack'], date: '2024-07-25' },
  // SUSPENSION
  { id: 'g02', title: 'Falcon Shock Absorber and Black Coil Spring', category: 'suspension', vehicle: '4x4', description: 'Close-up of a Falcon branded silver shock absorber paired with a black coil spring, photographed in the Weca workshop. Falcon is one of our carried suspension brands.', image: '/images/gallery/roofrack_70series_03.webp', workDone: ['Falcon Shock', 'Coil Spring'], date: '2024-02-15' },
  { id: 'g07', title: 'Red Anodised Coil Spacers for Ford Ranger and Toyota Hilux', category: 'suspension', vehicle: 'Ford Ranger / Toyota Hilux', description: 'Stacks of red anodised aluminium coil spacers for Ford Ranger and Toyota Hilux suspension lifts, displayed in the Weca workshop.', image: '/images/gallery/rooftent_with_awning_03.webp', workDone: ['Coil Spacers', 'Suspension Lift'], date: '2024-04-15' },
  { id: 'g16', title: 'Dobinsons 4WD Shock Absorber and Yellow Coil Spring', category: 'suspension', vehicle: '4x4', description: 'Dobinsons 4WD Suspension shock absorber paired with a matching yellow coil spring, installed on a customer vehicle. Dobinsons is one of our carried suspension brands.', image: '/images/gallery/awning_desert_02.webp', workDone: ['Dobinsons Shock', 'Coil Spring'], date: '2024-05-20' },
  // RECOVERY
  { id: 'g06', title: 'Air Compressor Installation in Vehicle', category: 'recovery', vehicle: '4x4', description: 'Black air compressor unit mounted on a custom metal bracket inside a customer vehicle, wired to the electrical system with a clear hose for tyre inflation.', image: '/images/gallery/rooftent_safari_06.webp', workDone: ['Air Compressor', 'Custom Bracket', 'Wiring'], date: '2024-04-10' },
  { id: 'g19', title: 'Ford Front Grille Display Stand', category: 'recovery', vehicle: 'Showcase', description: 'Display of six automotive front grilles, primarily for Ford trucks, arranged on a metal rack inside the Weca workshop parts area.', image: '/images/gallery/roofrack_offroad_01.webp', workDone: ['Parts Display', 'Ford Grilles'], date: '2024-06-05' },
  { id: 'g20', title: 'Runva EWX 9500S2 Winch on Display Stand', category: 'recovery', vehicle: '4x4', description: 'Runva EWX 9500S2 electric winch mounted on a red display stand in the Weca workshop, ready for fitment to a customer vehicle. Runva is one of our carried winch brands.', image: '/images/gallery/rooftent_desert_06.webp', workDone: ['Runva Winch', 'Display Stand'], date: '2024-06-10' },
  // CANOPY
  { id: 'g04', title: 'Suzuki Jimny Custom Rear Storage Box', category: 'canopy', vehicle: 'Suzuki Jimny', description: 'Custom-built grey carpeted storage box fitted in the rear cargo area of a silver Suzuki Jimny, fabricated in the Weca workshop.', image: '/images/gallery/rooftent_dual_awning.webp', workDone: ['Custom Storage Box', 'Carpet Fitout'], date: '2024-04-01' },
  { id: 'g15', title: 'Interior Storage Console Between Front Seats', category: 'canopy', vehicle: '4x4', description: 'Black plastic storage console or cooler unit mounted between the front seats of a customer vehicle, with light grey fabric seats and red seatbelt buckles visible.', image: '/images/gallery/awning_extended_03.webp', workDone: ['Storage Console', 'Interior Fitout'], date: '2024-05-15' },
  { id: 'g23', title: 'Diamond-Plate Side Step Detail', category: 'canopy', vehicle: '4x4', description: 'Close-up of a metallic diamond-plate side step or running board fitted to a custom black bracket, photographed in the Weca workshop.', image: '/images/gallery/rooftent_with_awning_04.webp', workDone: ['Side Step', 'Custom Bracket'], date: '2024-06-25' },
  { id: 'g26', title: 'WECA Branded Storage Bracket', category: 'canopy', vehicle: '4x4', description: 'Black metal storage bracket branded with the WECA logo, custom fabricated and installed in a customer vehicle.', image: '/images/gallery/rooftent_with_sparewheel_02.webp', workDone: ['Custom Bracket', 'Branding'], date: '2024-07-10' },
  // BRANDING
  { id: 'g31', title: 'M and Z Motor Show Promotional Graphic', category: 'branding', vehicle: 'Event', description: 'Weca Offroad Centre promotional graphic for the M and Z Motor Show, organised by the Metje and Ziegler Group. Features a Jeep Wrangler and showcases our Opposite Lock and Tough Dog 4x4 accessory partnerships.', image: '/images/gallery/workshop_interior_01.webp', workDone: ['Event Promotion', 'Brand Partnership'], date: '2024-08-01' },
  { id: 'g32', title: 'Customer Toyota Pickup at Workshop', category: 'branding', vehicle: 'Toyota Pickup', description: 'Rear view of a white Toyota 4WD pickup truck, photographed in the outdoor paved area outside the Weca workshop.', image: '/images/gallery/workshop_interior_02.webp', workDone: ['Customer Vehicle'], date: '2024-08-05' },
  { id: 'g33', title: 'Weca Offroad Centre Quality Tyres Mud Splash Promo', category: 'branding', vehicle: 'Showcase', description: 'Weca Offroad Centre promotional image featuring a muddy off-road tyre splashing through thick mud, with the Weca logo and Quality Tyres tagline. This is the cover photo from our live Google Maps listing.', image: '/images/gallery/gmaps/weca-gmaps-cover.webp', workDone: ['Brand Marketing', 'Google Maps Cover Photo'], date: '2024-08-07' },
];

// Gallery Categories
export const galleryCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'full-build', name: 'Full Builds' },
  { id: 'suspension', name: 'Suspension' },
  { id: 'bumpers', name: 'Bumpers' },
  { id: 'recovery', name: 'Recovery' },
  { id: 'canopy', name: 'Canopy & Storage' },
  { id: 'branding', name: 'Shop & Branding' },
];

// Brands
export const brands: Brand[] = [
  // Confirmed real brand list per client (Shalyn), 2026-08-06.
  // Removed: Front Runner, ARB, BF Goodrich, Rhinoman - not carried.
  // All logos sourced from each brand's own official site (never
  // third-party aggregators), in small batches to avoid timeouts.
  // Logos are display-only (non-clickable) in the carousel per client
  // instruction - the `website` field is kept for reference only and is
  // NOT rendered as a link.
  //
  // Pending (confirmed by client but logo not yet sourced):
  //  - DAG: no independent official site found; distributed by 4x4
  //    Wholesalers Africa. Client to provide logo directly.
  //  - 'Gerbers': client mentioned but name unconfirmed - DO NOT add
  //    until Tangi confirms the exact brand name.
  //  - Tyre brands: client said 'different tyre brands and rims' but did
  //    not name which - DO NOT add until client provides specific names.
  { name: 'Wildog', logo: '/brands/wildog.png', description: 'Bumpers and protection', website: 'https://wildog.co.za/' },
  { name: 'Dometic', logo: '/brands/dometic.svg', description: 'Camping equipment', website: 'https://dometic.com/' },
  { name: 'Tentco', logo: '/brands/tentco.webp', description: 'Premium rooftop tents', website: 'https://tentco.co.za/' },
  { name: 'Tough Dog', logo: '/brands/tough-dog.png', description: 'Suspension systems', website: 'https://toughdog.com.au/' },
  { name: 'EcoFlow', logo: '/brands/ecoflow.svg', description: 'Portable power', website: 'https://ecoflow.com/' },
  { name: 'WARN', logo: '/brands/warn.svg', description: 'Winches and recovery gear', website: 'https://www.warn.com/' },
  { name: 'Howling Moon', logo: '/brands/howling-moon.png', description: 'Rooftop tents and awnings', website: 'https://www.howlingmoon.co.za/' },
  { name: 'Fox', logo: '/brands/fox.svg', description: 'Performance suspension', website: 'https://ridefox.com/' },
  { name: 'Runva', logo: '/brands/runva.svg', description: 'Electric winches', website: 'https://www.runva.com/' },
  { name: 'GOBI X', logo: '/brands/gobi-x.png', description: 'Front bumpers and protection', website: 'https://www.gobi-x.co.za/' },
  { name: 'Ratel', logo: '/brands/ratel.png', description: 'Bos bumpers and protection', website: 'https://bosbumper.co.za/' },
  { name: 'Moremi', logo: '/brands/moremi.png', description: 'Custom campers and trailers', website: 'https://www.moremitrailers.co.za/' },
  { name: 'DeGraaf Exhausts', logo: '/brands/degraaf.png', description: 'Performance exhaust systems', website: 'https://degraaf.co.za/' },
  { name: 'Fredlin Hoists', logo: '/brands/fredlin.png', description: 'Rooftop tent hoists', website: 'https://fredlin.co.za/' },
  { name: 'EFS', logo: '/brands/efs.png', description: '4x4 suspension and accessories', website: 'https://efs4wd.com.au/' },
  { name: 'Tougher', logo: '/brands/tougher.webp', description: 'Seat covers and accessories', website: 'https://tougher.co.za/' },
  { name: 'Beesdam', logo: '/brands/beesdam.png', description: 'Premium seat covers', website: 'https://beesdam.co.za/' },
  { name: 'Escape Gear', logo: '/brands/escape-gear.webp', description: 'Vehicle seat covers and protection', website: 'https://escapegear.com/' },
  { name: 'AluBlack', logo: '/brands/alublack.png', description: 'Flatbed trays and canopies', website: 'https://alublack.com/' },
  { name: 'Rockford', logo: '/brands/rockford.svg', description: 'Premium audio systems', website: 'https://rockfordfosgate.com/' },
];

// Business Information - Complete with all contact details
export const businessInfo = {
  name: 'Weca Offroad Centre',
  tagline: "The only 4x4 shop in Swakopmund with EVERYTHING you need",
  description: 'Your trusted partner for 4x4 accessories, fitment, and offroad equipment in Namibia.',
  owner: 'Werner Schaap',
  founded: '2015',
  address: 'Eliaser Tuhadeleni Erf 4802',
  addressFull: 'Eliaser Tuhadeleni Erf 4802, Swakopmund Industrial, 13001, Namibia',
  addressStreet: 'CNR Eberston and Nelson Mandela Street',
  city: 'Swakopmund',
  region: 'Erongo',
  country: 'Namibia',
  postalCode: '13001',
  phone: ['+264 81 169 1942', '+264 85 269 1942'],
  phoneLandline: ['+264 64 462 725', '+264 64 462 840'],
  email: 'wecaoffroadcentre@gmail.com',
  whatsapp: '+264 81 169 1942',
  hours: {
    weekdays: '08:00 - 17:00',
    saturday: '08:00 - 12:00',
    sunday: 'Closed',
  },
  social: {
    facebook: 'https://www.facebook.com/100064362595359/',
    instagram: 'https://www.instagram.com/wecaoffroadcentre/',
    tiktok: 'https://www.tiktok.com/@wecaoffroadcentre',
  },
  maps: {
    placeId: 'ChIJoa5Ba9xYdhwRzBnhVLf64Pc',
    googleMapsLink: 'https://www.google.com/maps/place/?q=place_id:ChIJoa5Ba9xYdhwRzBnhVLf64Pc',
    directionsLink: 'https://www.google.com/maps/dir/?api=1&destination=-22.6712912,14.5492686&destination_place_id=ChIJoa5Ba9xYdhwRzBnhVLf64Pc',
    embedUrl: 'https://maps.google.com/maps?q=Weca+Offroad+Centre+Swakopmund&z=17&output=embed',
    reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJoa5Ba9xYdhwRzBnhVLf64Pc',
    coordinates: {
      lat: -22.6712912,
      lng: 14.5492686,
    },
    plusCode: '8GHX+FP Swakopmund, Namibia',
  },
  websites: {
    primary: 'https://weca.co.za',
    secondary: 'https://weca4x4.co.za',
  },
};

// Hero Slides - REAL ASSETS, HONEST ALTS (audit 2026-09-12).
// Every slide now shows exactly what its alt text says. The previous set
// reused gallery photos with aspirational labels that did not match the
// pixels: a motor-show booth as "Professional Fitment Centre", a B&W
// engine bay as "Swakopmund Industrial Premises", a showroom interior as
// "Namib Desert Exploration", and a lime Jeep with a FOR SALE sign at a
// DoorTEC garage-doors business as "Custom Storage Solutions".
// Sources (all verified against the actual photos):
//   slide-1.webp - white Toyota Hilux in front of the WECA OFF-ROAD
//                  CENTRE building (2400x1333)
//   slide-2.webp - the shop's showroom interior (2400x1792)
//   entrance_sign.webp - customer Jeeps on a desert trail run (1080x810)
//   awning_extended_01.webp - Toyota FJ Cruiser on a sandy track (1080x618)
//   rooftent_safari_02.webp - customer Jeep Wrangler build (1440x1080)
export const heroSlides = [
  { src: '/images/hero/slide-1.webp', alt: 'Weca Offroad Centre premises in Swakopmund Industrial with a customer Toyota Hilux' },
  { src: '/images/hero/slide-2.webp', alt: 'Weca Offroad Centre showroom interior with tyres and accessories' },
  { src: '/images/gallery/entrance_sign.webp', alt: 'Customer Jeeps on a desert trail run' },
  { src: '/images/gallery/awning_extended_01.webp', alt: 'Toyota FJ Cruiser on a sandy desert track' },
  { src: '/images/gallery/rooftent_safari_02.webp', alt: 'Customer Jeep Wrangler build at Weca Offroad Centre' },
];

// Navigation Links
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/shop', label: 'Shop' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

// Shop Categories for Dropdown. Only categories that carry real products
// in the current catalog (navigation/recovery/tyres return 0 results and
// are excluded until real stock lands for them).
export const shopCategories = [
  { id: 'rooftop-tents', name: 'Rooftop Tents', href: '/shop?category=rooftop-tents' },
  { id: 'suspension', name: 'Suspension & Shocks', href: '/shop?category=suspension' },
  { id: 'bumpers', name: 'Bumpers & Protection', href: '/shop?category=bumpers' },
  { id: 'canopies', name: 'Canopies & Storage', href: '/shop?category=canopies' },
  { id: 'awnings', name: 'Awnings & Shelters', href: '/shop?category=awnings' },
  { id: 'seat-covers', name: 'Seat Covers & Interior', href: '/shop?category=seat-covers' },
  { id: 'lighting', name: 'Lighting', href: '/shop?category=lighting' },
  { id: 'power', name: 'Power & Battery', href: '/shop?category=power' },
  { id: 'refrigeration', name: 'Fridges & Coolers', href: '/shop?category=refrigeration' },
  { id: 'camping', name: 'Camping Equipment', href: '/shop?category=camping' },
  { id: 'winches', name: 'Winches & Electric', href: '/shop?category=winches' }
];
