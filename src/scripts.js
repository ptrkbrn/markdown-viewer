function toggleWindow(e) {
  const window = e.target.closest('.window');
  const taskbar = document.querySelector('.taskbar');
  const App = document.querySelector('.App');
  e.target.classList.toggle('fa-window-minimize');
  e.target.classList.toggle('fa-window-maximize');
  window.classList.toggle('is-minimized');
  window.parentElement === App ? taskbar.append(window) : App.prepend(window);
}

export default toggleWindow;
