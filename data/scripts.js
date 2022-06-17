// console.log('how abot that');

async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/posts/';
    try {
      let res = await fetch(url);
      return await res.json()
    } catch (error) {
      console.log(error)
    }
  }
  
  async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
      let htmlRender =  `
        <div class='user'>
          <h2>${user.title}</h2>
          <h2>${user.id}</h2>
          <p>${user.body}</p>
        </div>
      `;
      html += htmlRender
    });
    let wrapper = document.querySelector('.users');
    wrapper.innerHTML = html;
}
  
  renderUsers();