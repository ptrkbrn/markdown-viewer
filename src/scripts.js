function toggleWindow(e) {
  const window = e.target.closest('.window');
  const wrap = e.target.closest('.wrap');
  const taskbar = document.querySelector('.taskbar');
  const App = document.querySelector('.App');
  e.target.classList.toggle('fa-window-minimize');
  e.target.classList.toggle('fa-window-maximize');
  window.classList.toggle('is-minimized');
  wrap.classList.toggle('is-minimized');
  wrap.parentElement === App ? taskbar.append(wrap) : App.prepend(wrap);
}

export default toggleWindow;
