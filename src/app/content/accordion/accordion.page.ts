import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage {
  panels = [
    { 
      title: 'Cherries', 
      content: 'As raw fruit, sweet cherries provide little nutrient content per 100 g serving. Dietary fiber and vitamin C are present in the most significant content while other vitamins and dietary minerals each supply less than 10% of the Daily Value per serving, respectively.', 
      source: 'https://en.wikipedia.org/wiki/Cherry', 
      sourceText: 'Wikipedia'
    },
    { 
      title: 'Cranberries', 
      content: 'Cranberries are a group of evergreen dwarf shrubs or trailing vines in the subgenus Oxycoccus of the genus Vaccinium. In North America, the species Vaccinium macrocarpon is most common.', 
      source: 'https://en.wikipedia.org/wiki/Cranberry', 
      sourceText: 'Wikipedia'
    },
    { 
      title: 'Blackberries', 
      content: 'Blackberries are rich in vitamins C and K, dietary fiber, and manganese. They are particularly notable for their high levels of antioxidant compounds, which contribute to their health benefits.', 
      source: 'https://en.wikipedia.org/wiki/Blackberry', 
      sourceText: 'Wikipedia'
    },
    { 
      title: 'Açaí berries', 
      content: 'Açaí berries are known for their antioxidant properties and are often used in smoothies and bowls. They contain healthy fats and fiber.', 
      source: 'https://en.wikipedia.org/wiki/A%C3%A7a%C3%AD_palm', 
      sourceText: 'Wikipedia'
    }
  ];

  expandedIndex: number | null = null;

  togglePanel(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  isPanelExpanded(index: number): boolean {
    return this.expandedIndex === index;
  }
}
