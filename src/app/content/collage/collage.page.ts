import { Component, ViewChild, ElementRef } from '@angular/core';

interface CollageTemplate {
  name: string;
  rows: number;
  cols: number;
}

@Component({
  selector: 'app-collage',
  templateUrl: './collage.page.html',
  styleUrls: ['./collage.page.scss'],
})
export class CollagePage {
  @ViewChild('collageCanvas', { static: false }) collageCanvas!: ElementRef<HTMLCanvasElement>;
  private canvasContext: CanvasRenderingContext2D | null = null; 
  private imageElements: HTMLImageElement[] = [];
  public selectedTemplate: CollageTemplate | null = null;

  public templates: CollageTemplate[] = [
    { name: 'Grid (2x2)', rows: 2, cols: 2 },
    { name: 'Grid (3x1)', rows: 1, cols: 3 },
    { name: 'Classic Strip', rows: 3, cols: 1 },
  ];

  constructor() {}

  // Handle file selection
  onFileSelected(event: any) {
    const files = event.target.files;

    if (files) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            this.imageElements.push(img);
            this.renderCollage(); // Render each time a new image is added
          };
        };
        reader.readAsDataURL(file);
      }
    }
  }

  // Set the selected template
  selectTemplate(template: CollageTemplate) {
    this.selectedTemplate = template;
    this.renderCollage();
  }

  // Render images based on selected template
  renderCollage() {
    const canvas = this.collageCanvas.nativeElement;
    this.canvasContext = canvas.getContext('2d');
  
    if (this.canvasContext && this.selectedTemplate) {
      this.canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  
      const rows = this.selectedTemplate.rows;
      const cols = this.selectedTemplate.cols;
      const imgWidth = canvas.width / cols;
      const imgHeight = canvas.height / rows;
  
      this.imageElements.forEach((img, index) => {
        const x = (index % cols) * imgWidth;
        const y = Math.floor(index / cols) * imgHeight;
        
        // Ensure that canvasContext is not null before using it
        if (this.canvasContext) {
          this.canvasContext.drawImage(img, x, y, imgWidth, imgHeight);
        }
      });
    }
  }

  // Download the collage as an image file
  downloadCollage() {
    const canvas = this.collageCanvas.nativeElement;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg');
    link.download = 'photo-collage.jpg';
    link.click();
  }
}
 