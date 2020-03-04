const message = (props, time = 4000) => {
  const msg = document.createElement("div");
  const modal = document.getElementsByClassName('modals');
  msg.classList.add('message');
  msg.innerHTML = `
    <div class="ui card">
    <div class="content">
      <div class="header">RipReview</div>
      <div class="meta">${props.title}</div>
      <div class="description">
           ${props.message}
      </div>
    </div>
`;
  if(modal.length !== 0){
      modal[0].appendChild(msg);
      // close message
      setTimeout(()=> {
          try {
              modal[0].removeChild(msg)
          }
          catch (e) {
              console.error(e)
          }

      },time)
  }
  else  {
          document.body.appendChild(msg);

      // close message
      setTimeout(()=> {
          try {
              document.body.removeChild(msg)
          }
          catch (e) {
              console.error(e)
          }

      },time)
  }

};

export default message
