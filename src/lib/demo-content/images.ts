/**
 * Curated, verified images.unsplash.com photo IDs (free tier license) used across
 * the six portfolio demo sites. Kept separate from component/content files so the
 * pool can be reused across sections without duplicating URLs.
 */
function img(id: string, width: number, height?: number) {
  const params = new URLSearchParams({ auto: "format", fit: "crop", w: String(width), q: "80" });
  if (height) params.set("h", String(height));
  return `https://images.unsplash.com/${id}?${params.toString()}`;
}

export const unsplash = img;

export const construction = {
  heroWide: "photo-1531834685032-c34bf0d84c77",
  crew: "photo-1541888946425-d81bb19240f5",
  frame: "photo-1587582423116-ec07293f0395",
  worker: "photo-1589939705384-5185137a7f0f",
  sunset: "photo-1579847188804-ecba0e2ea330",
  handshakeTwo: "photo-1504307651254-35680f356dfd",
  vests: "photo-1626885930974-4b69aa21bbf9",
  cranes: "photo-1429497419816-9ca5cfb4571a",
  stairs: "photo-1516216628859-9bccecab13ca",
  hardHat: "photo-1567954970774-58d6aa6c50dc",
  hammer: "photo-1558227691-41ea78d1f631",
  cement: "photo-1574757987642-5755f0839101",
  redHardHat: "photo-1672748341520-6a839e6c05bb",
  groupSite: "photo-1694521787162-5373b598945c",
};

export const restaurant = {
  heroWide: "photo-1508424757105-b6d5ad9329d0",
  pub: "photo-1517248135467-4c7edcad34c4",
  diningRoom: "photo-1667388969250-1c7220bf3f37",
  whiteRoundTable: "photo-1583354608715-177553a4035e",
  brownDining: "photo-1551632436-cbf8dd35adfa",
  waterfront: "photo-1559339352-11d035aa65de",
  contemporary: "photo-1613274554329-70f997f5789f",
  emptyLit: "photo-1538333581680-29dd4752ddf2",
  woodenFurniture: "photo-1565650834520-0b48a5c83f43",
  ambientLamps: "photo-1535850452425-140ee4a8dbae",
  largeDining: "photo-1667388968964-4aa652df0a9b",
  dishSteak: "photo-1663530761401-15eefb544889",
  dishFishVeg: "photo-1676471926534-d5c9771909fa",
  dishFishFillet: "photo-1782821961510-aa2b6baed210",
  dishOyster: "photo-1779918262062-76030c8cbbff",
  dishChickenRisotto: "photo-1784203648814-48943de470c1",
  dishGnocchi: "photo-1782849206109-0c6a51988e1e",
  dishPlating: "photo-1566670735661-a3af40a3b4df",
};

export const autoRepair = {
  heroWide: "photo-1631720040176-0d789a643a78",
  workingMachinery: "photo-1676018366904-c083ed678e60",
  underVehicle: "photo-1643701079732-3b1c7a797e3d",
  wrenchesRack: "photo-1698382318239-2b134ca8fa4c",
  wrenchesBox: "photo-1637640125496-31852f042a60",
  motorcycle: "photo-1636761358783-209512dccd98",
  engineShelf: "photo-1702146713882-2579afb0bfba",
  engineDiagnostic: "photo-1702146715426-2380c6ad54c5",
  tireWrench: "photo-1702146713922-613313be011d",
};

export const barbershop = {
  heroWide: "photo-1593702275687-f8b402bf1fb5",
  vintageChairBrick: "photo-1585747860715-2ba37e788b70",
  clientInChair: "photo-1503951914875-452162b0f3f1",
  precisionCut: "photo-1647140655214-e4a2d914971f",
  modernChair: "photo-1621645582931-d1d3e6564943",
  salonInterior: "photo-1536520002442-39764a41e987",
  beardGrooming: "photo-1657105052497-f996284ffff8",
  storefront: "photo-1678356164573-9a534fe43958",
  vintageRedChair: "photo-1592647420148-bfcc177e2117",
};

export const cafe = {
  heroWide: "photo-1660203861072-318f2c468d94",
  talking: "photo-1516197370049-569c4eaba1d6",
  outdoorSeating: "photo-1596517447156-4408f27791ae",
  baristaWork: "photo-1594402919317-9e67dca0a305",
  chairs: "photo-1574374752751-f511f816b69b",
  interiorPlant: "photo-1642647916129-3909c75c0267",
  mugTable: "photo-1628565350863-533a3c174b85",
  hangingLamps: "photo-1676260808397-67ead2bbe666",
  counterPhone: "photo-1642647915493-03b72308d002",
  makingCoffee: "photo-1579265898841-79c7890d69cf",
  cappuccino: "photo-1563311977-d285756282dc",
  cappuccinoWood: "photo-1681838853984-697bbb001257",
  latteArtCloseup: "photo-1742549626436-bf3c11dab212",
  simpleCoffee: "photo-1655681515237-1b05b970cc97",
  twoMugs: "photo-1514481538271-cf9f99627ab4",
  pouringCream: "photo-1547240089-566513e12c89",
  cappuccinoMug: "photo-1558220829-4694a46bb01f",
  croissantLatte: "photo-1769138886359-fbfae1967b67",
  pastrySesame: "photo-1762534877087-b8279918dbbe",
};

export const gym = {
  heroWide: "photo-1689877020200-403d8542d95d",
  dumbbellsGear: "photo-1534438327276-14e5300c3a48",
  interior: "photo-1571902943202-507ec2618e8f",
  barbellPrep: "photo-1517836357463-d25dfeac3438",
  grayscaleWorkout: "photo-1526506118085-60ce8714f8c5",
  weightSession: "photo-1541534741688-6078c6bfb5c5",
  dumbbellsDisplay: "photo-1576678927484-cc907957088c",
  battleRope: "photo-1548690312-e3b507d8c110",
  barbellLift: "photo-1722925541142-5db2668ca492",
};
