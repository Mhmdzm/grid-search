import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from './article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm = '';

  articles: Article[] = [
    {
      title: 'Understanding the difference between grid-template and grid-auto',
      date: '3,jun ,2025',
      content:
        'With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties.',
    },
    {
      title: 'anything',
      date: '3,nov, 2025',
      content:
        'anything,anything,anything',
    },
  ];

  highlight(text: string): string {
    if (!this.searchTerm.trim()) return text;
    const re = new RegExp(`(${this.searchTerm})`, 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  get filteredArticles(): Article[] {
    const term = this.searchTerm.toLowerCase();
    return this.articles.filter(
      article =>
        article.title.toLowerCase().includes(term) ||
        article.content.toLowerCase().includes(term)
    );
  }
}
