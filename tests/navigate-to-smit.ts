import { Given, Then, When } from "cucumber";
import { t, ClientFunction, Selector } from "testcafe";
import SmitPage from "../pages/smitPageElements";

const getPageTitle = ClientFunction(() => document.title);

const scrollToElement = ClientFunction((selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }
});


////////////////////// esimene test ////////////////////////

Given("I have opened the SMIT career page", async () => {
  await t.navigateTo('https://www.smit.ee/et/karjaar');
});

Then("The page should have the correct title", async () => {
  const pageTitle = await getPageTitle();
  await t.expect(pageTitle).eql("Karjäär - Siseministeeriumi infotehnoloogia- ja arenduskeskus");
});

When("I click on the logo", async () => {
  await t.click(SmitPage.LogoElement);

  // Ootame, kuni leht on ümber suunatud ja päise tekst on muutunud
  await t
    .expect(getPageTitle())
    .notEql("Karjäär - Siseministeeriumi infotehnoloogia- ja arenduskeskus", { timeout: 10000 });
});

Then("The page should redirect and have the correct title", async () => {
  const pageTitle = await getPageTitle();
  await t.expect(pageTitle).eql("Siseministeeriumi infotehnoloogia- ja arenduskeskus");
});


////////////////////// teine test ////////////////////////

Then("Valid elements displayed", async () => {
  // Kontrollime, et elemendid eksisteerivad
  await t
    .expect(SmitPage.FirstMenuItem.exists).ok('The first <li> element in the nav list should exist')
    .expect(SmitPage.SecondMenuItem.exists).ok('The second <li> element in the nav list should exist')
    .expect(SmitPage.ThirdMenuItem.exists).ok('The third <li> element in the nav list should exist')
    .expect(SmitPage.FourthMenuItem.exists).ok('The fourth <li> element in the nav list should exist')
    .expect(SmitPage.FifthMenuItem.exists).ok('The fifth <li> element in the nav list should exist')
    .expect(SmitPage.SixthMenuItem.exists).ok('The sixth <li> element in the nav list should exist')
    .expect(SmitPage.SeventhMenuItem.exists).ok('The seventh <li> element in the nav list should exist')
    .expect(SmitPage.EightMenuItem.exists).ok('The eigth <li> element in the nav list should exist');

  // Menüüelementide tekstide talletamine muutujatesse
  const firstListItemText = await SmitPage.FirstMenuItem.innerText;
  const secondListItemText = await SmitPage.SecondMenuItem.innerText;
  const thirdListItemText = await SmitPage.ThirdMenuItem.innerText;
  const fourthListItemText = await SmitPage.FourthMenuItem.innerText;
  const fifthListItemText = await SmitPage.FifthMenuItem.innerText;
  const sixthListItemText = await SmitPage.SixthMenuItem.innerText;
  const seventhListItemText = await SmitPage.SeventhMenuItem.innerText;
  const eightListItemText = await SmitPage.EightMenuItem.innerText;

  // Vaid testimise puhuks
  console.log(`First <li> text: ${firstListItemText}`);

  await t.expect(firstListItemText).eql('Meist', 'The first <li> text does not match the expected value');
  await t.expect(secondListItemText).eql('Valdkonnad', 'The first <li> text does not match the expected value');
  await t.expect(thirdListItemText).eql('Leia kiirelt', 'The first <li> text does not match the expected value');
  await t.expect(fourthListItemText).eql('Uudised', 'The first <li> text does not match the expected value');
  await t.expect(fifthListItemText).eql('EL projektid', 'The first <li> text does not match the expected value');
  await t.expect(sixthListItemText).eql('Hanked', 'The first <li> text does not match the expected value');
  await t.expect(seventhListItemText).eql('Kontaktid', 'The first <li> text does not match the expected value');
  await t.expect(eightListItemText).eql('Tule smitikaks', 'The first <li> text does not match the expected value');
});



////////////////////// kolmas test ////////////////////////

Then("Praktika element exists", async () => {
  // Kontrollime, et Praktika element eksisteerib ja pole nähtav
  await t.expect(SmitPage.Praktika.exists).ok('Praktika element should exist');
  await t.expect(SmitPage.Praktika.visible).notOk('Praktika element should be visible');
});

