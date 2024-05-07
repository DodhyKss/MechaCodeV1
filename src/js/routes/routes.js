


// Define a function to handle routing
  function handleRouting() {
    // Get the current route
    const route = window.location.hash.slice(1) || '/';
    // Select the content area
    const content = document.getElementById('content');
  
    // Load the appropriate JavaScript file based on the route
    switch (route) {
      case '/':
        loadPage('/src/js/pages/home.js');
        break;
      case '/about':
        loadPage('/src/js/pages/about.js');
        break;
      case '/contact':
        loadPage('/src/js/pages/contact.js');
        break;
      case '/list-kelas':
        loadPage('/src/js/pages/list-kelas.js');
        break;
      case '/materi-1-cpp':
        loadPage('/src/js/pages/course/coursecpp/materi-1-cpp.js');
        break;
      case '/materi-2-cpp':
        loadPage('/src/js/pages/course/coursecpp/materi-2-cpp.js');
        break;
      case '/materi-3-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-3-cpp.js');
        break;
      case '/materi-4-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-4-cpp.js');
        break;
      case '/materi-5-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-5-cpp.js');
        break;
      case '/materi-6-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-6-cpp.js');
        break;
      case '/materi-7-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-7-cpp.js');
        break;
      case '/materi-8-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-8-cpp.js');
        break;
      case '/materi-9-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-9-cpp.js');
        break;
      case '/materi-10-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-10-cpp.js');
        break;
      case '/materi-11-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-11-cpp.js');
        break;
      case '/materi-12-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-12-cpp.js');
        break;
      case '/materi-13-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-13-cpp.js');
        break;
      case '/materi-14-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-14-cpp.js');
        break;
      case '/materi-15-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-15-cpp.js');
        break;
      case '/materi-16-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-16-cpp.js');
        break;
      case '/materi-17-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-17-cpp.js');
        break;
      case '/materi-18-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-18-cpp.js');
        break;
      case '/materi-19-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-19-cpp.js');
        break;
      case '/materi-20-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-20-cpp.js');
        break;
      case '/materi-21-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-21-cpp.js');
        break;
      case '/materi-22-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-22-cpp.js');
        break;
      case '/materi-23-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-23-cpp.js');
        break;
      case '/materi-24-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-24-cpp.js');
        break;
      case '/materi-25-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-25-cpp.js');
        break;
      case '/materi-26-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-26-cpp.js');
        break;
      case '/materi-27-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-27-cpp.js');
        break;
      case '/materi-28-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-28-cpp.js');
        break;
      case '/materi-29-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-29-cpp.js');
        break;
      case '/materi-30-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-30-cpp.js');
        break;
      case '/materi-31-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-31-cpp.js');
        break;
      case '/materi-32-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-32-cpp.js');
        break;
      case '/materi-33-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-33-cpp.js');
        break;
      case '/materi-34-cpp':
          loadPage('/src/js/pages/course/coursecpp/materi-34-cpp.js');
        break;
      case '/materi-1-py':
        loadPage('/src/js/pages/course/coursepython/materi-1-py.js');
        break;
      case '/materi-2-py':
        loadPage('/src/js/pages/course/coursepython/materi-2-py.js');
        break;
      case '/materi-3-py':
        loadPage('/src/js/pages/course/coursepython/materi-3-py.js');
        break;
      case '/materi-4-py':
        loadPage('/src/js/pages/course/coursepython/materi-4-py.js');
        break;
      case '/materi-5-py':
        loadPage('/src/js/pages/course/coursepython/materi-5-py.js');
        break;
      case '/materi-6-py':
        loadPage('/src/js/pages/course/coursepython/materi-6-py.js');
        break;
      case '/materi-7-py':
        loadPage('/src/js/pages/course/coursepython/materi-7-py.js');
        break;
      case '/materi-8-py':
        loadPage('/src/js/pages/course/coursepython/materi-8-py.js');
        break;
      case '/materi-9-py':
        loadPage('/src/js/pages/course/coursepython/materi-9-py.js');
        break;
      case '/materi-10-py':
        loadPage('/src/js/pages/course/coursepython/materi-10-py.js');
        break;
      case '/materi-11-py':
        loadPage('/src/js/pages/course/coursepython/materi-11-py.js');
        break;
      case '/materi-12-py':
        loadPage('/src/js/pages/course/coursepython/materi-12-py.js');
        break;
      case '/materi-13-py':
        loadPage('/src/js/pages/course/coursepython/materi-13-py.js');
        break;
      case '/materi-14-py':
        loadPage('/src/js/pages/course/coursepython/materi-14-py.js');
        break;
      case '/materi-15-py':
        loadPage('/src/js/pages/course/coursepython/materi-15-py.js');
        break;
      case '/materi-16-py':
        loadPage('/src/js/pages/course/coursepython/materi-16-py.js');
        break;
      case '/materi-17-py':
        loadPage('/src/js/pages/course/coursepython/materi-17-py.js');
        break;
      case '/materi-18-py':
        loadPage('/src/js/pages/course/coursepython/materi-18-py.js');
        break;
      case '/materi-19-py':
        loadPage('/src/js/pages/course/coursepython/materi-19-py.js');
        break;
      case '/materi-20-py':
        loadPage('/src/js/pages/course/coursepython/materi-20-py.js');
        break;
      case '/materi-21-py':
        loadPage('/src/js/pages/course/coursepython/materi-21-py.js');
        break;
      case '/materi-22-py':
          loadPage('/src/js/pages/course/coursepython/materi-22-py.js');
        break;
      case '/materi-23-py':
          loadPage('/src/js/pages/course/coursepython/materi-23-py.js');
        break;
      case '/materi-24-py':
          loadPage('/src/js/pages/course/coursepython/materi-24-py.js');
        break;
      case '/materi-25-py':
          loadPage('/src/js/pages/course/coursepython/materi-25-py.js');
        break;
      case '/materi-26-py':
          loadPage('/src/js/pages/course/coursepython/materi-26-py.js');
        break;
      case '/materi-27-py':
          loadPage('/src/js/pages/course/coursepython/materi-27-py.js');
        break;
      case '/materi-1-js':
        loadPage('/src/js/pages/course/coursejs/materi-1-js.js');
        break;
      case '/materi-1-dt':
        loadPage('/src/js/pages/course/dart/materi-1-dt.js');
        break;
      case '/materi-2-dt':
        loadPage('/src/js/pages/course/dart/materi-2-dt.js');
        break;
      case '/materi-3-dt':
        loadPage('/src/js/pages/course/dart/materi-3-dt.js');
        break;
      case '/materi-4-dt':
        loadPage('/src/js/pages/course/dart/materi-4-dt.js');
        break;
      case '/materi-5-dt':
        loadPage('/src/js/pages/course/dart/materi-5-dt.js');
        break;
      case '/materi-6-dt':
        loadPage('/src/js/pages/course/dart/materi-6-dt.js');
        break;
      case '/materi-7-dt':
        loadPage('/src/js/pages/course/dart/materi-7-dt.js');
        break;
      case '/materi-8-dt':
        loadPage('/src/js/pages/course/dart/materi-8-dt.js');
        break;
      case '/materi-9-dt':
        loadPage('/src/js/pages/course/dart/materi-9-dt.js');
        break;
      case '/materi-10-dt':
        loadPage('/src/js/pages/course/dart/materi-10-dt.js');
        break;
      default:
        loadPage('/src/js/pages/notfound.js');
        break;
    }
  
    // Function to load JavaScript file
    function loadPage(page) {
      const script = document.createElement('script');
      script.src = page;
      content.innerHTML = ''; // Clear content
      content.appendChild(script);
    }
  }
  
  // Handle routing on page load and hash change
  window.addEventListener('load', handleRouting);
  window.addEventListener('hashchange', handleRouting);
  

