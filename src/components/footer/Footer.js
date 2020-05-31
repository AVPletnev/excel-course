import {ExcelComponent} from '@core/ExcelComponent'

export class Footer extends ExcelComponent {
  static className = 'excel__footer'
  toHTML() {
    return `
    <div class="row"></div>`
  }
}