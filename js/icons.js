/** Bộ biểu tượng SVG nét đơn (1.75px, bo tròn) cho nút chức năng. Emoji chỉ dùng cho nội dung game. */
const P = {
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  pause: '<rect x="6.5" y="5" width="4" height="14" rx="1"/><rect x="13.5" y="5" width="4" height="14" rx="1"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  book: '<path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5V18c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z"/><path d="M12 6v12.5"/>',
  branch: '<path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/>',
  collect: '<rect x="8" y="3" width="12" height="15" rx="2.2"/><path d="M4.5 7.5V19a2 2 0 0 0 2 2H16"/><path d="M14 8.2l1.1 2.2 2.4.35-1.75 1.7.42 2.4L14 13.7l-2.17 1.15.42-2.4-1.75-1.7 2.4-.35z"/>',
  tiem: '<g fill="currentColor" fill-opacity=".16" stroke="none"><path d="M5 5h14l1.5 5.5H3.5z"/><path d="M5.5 13h13v7h-13z"/></g><path d="M3.5 10.5L5 5h14l1.5 5.5"/><path d="M3.5 10.5a2.8 2.8 0 0 0 5.5 0 2.8 2.8 0 0 0 6 0 2.8 2.8 0 0 0 5.5 0"/><path d="M5.5 13v7h13v-7"/><path d="M10 20v-4.5h4V20"/>',
  kho: '<g fill="currentColor" fill-opacity=".16" stroke="none"><path d="M3.5 7.5L12 3.5l8.5 4L12 11.5z"/><path d="M12 11.5l8.5-4v9L12 20.5z" fill-opacity=".3"/></g><path d="M3.5 7.5L12 3.5l8.5 4v9L12 20.5l-8.5-4z"/><path d="M3.5 7.5L12 11.5l8.5-4M12 11.5v9"/><path d="M7.7 5.6l8.5 4"/>',
  phattrien: '<g fill="currentColor" fill-opacity=".16" stroke="none"><rect x="4" y="12" width="3.6" height="8" rx="1"/><rect x="10.2" y="7.5" width="3.6" height="12.5" rx="1"/><rect x="16.4" y="14" width="3.6" height="6" rx="1"/></g><path d="M4 20.5h16"/><path d="M4.5 9l4.5-4 3.5 2.5L19 3.5"/><path d="M15 3.5h4v4"/>',
  xahoi: '<g fill="currentColor" fill-opacity=".16" stroke="none"><circle cx="9" cy="8.5" r="3.2"/><circle cx="17.5" cy="9.5" r="2.5"/></g><circle cx="9" cy="8.5" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17.5" cy="9.5" r="2.5"/><path d="M17.5 14.5c2.4 0 3.8 1.7 3.8 4"/>',
  them: '<g fill="currentColor" fill-opacity=".16" stroke="none"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></g><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
  star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z"/>',
};
export function icon(name, size = 22, cls = '') {
  return `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;
}
