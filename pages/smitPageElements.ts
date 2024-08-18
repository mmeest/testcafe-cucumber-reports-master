import { Selector, t } from "testcafe";


class SmitPage {
  LogoElement: Selector;
  FirstMenuItem: Selector;
  SecondMenuItem: Selector;
  ThirdMenuItem: Selector;
  FourthMenuItem: Selector;
  FifthMenuItem: Selector;
  SixthMenuItem: Selector;
  SeventhMenuItem: Selector;
  EightMenuItem: Selector;
  Praktika: Selector;
  constructor() {
    this.LogoElement = Selector(".logo");
    this.FirstMenuItem = Selector('.nav').find('li').nth(0);
    this.SecondMenuItem = Selector('.nav').find('li').nth(1);
    this.ThirdMenuItem = Selector('.nav').find('li').nth(2);
    this.FourthMenuItem = Selector('.nav').find('li').nth(3);
    this.FifthMenuItem = Selector('.nav').find('li').nth(4);
    this.SixthMenuItem = Selector('.nav').find('li').nth(5);
    this.SeventhMenuItem = Selector('.nav').find('li').nth(6);
    this.EightMenuItem = Selector('.nav').find('li').nth(7);
    this.Praktika = Selector(".componentized");
  }
}

export default new SmitPage();

