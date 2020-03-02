const message = (props, time = 4000) => {
  const msg = document.createElement("div");
  msg.classList.add('message');
  msg.innerHTML = `
    <div class="ui card">
    <div class="content">
      <div class="header">Review IT</div>
      <div class="meta">${props.title}</div>
      <div class="description">
           ${props.message}
      </div>
    </div>
    
    `;
  document.body.appendChild(msg);
  // close message
    setTimeout(()=> {
        document.body.removeChild(msg)
    },time)
};

export default message
