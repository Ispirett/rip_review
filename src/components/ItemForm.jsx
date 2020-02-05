import React, { useContext, Fragment, useState } from "react";
import {
  Button,
  Popup,
  Form,
  Input,
  TextArea,
  Select,

} from "semantic-ui-react";
import {actions, AppContext} from "../container/AppContainer";
import Utils from "./Utils";
const { host } = Utils;
const categoryOptions = [
  { key: "business", text: "business", value: "business" },
  { key: "apartments", text: "apartment", value: "apartment" },
  { key: "miscellaneous", text: "miscellaneous", value: "miscellaneous" }
];

const apiItemCreate = async (data, token) => {
  try {
    const formData = new FormData()
      formData.append('item[title]',data.title);
      formData.append('item[category]', data.category);
      formData.append('item[description]', data.description);
      formData.append('item[image]', data.image);
    const response = await fetch(host.domain + host.itemCreate, {
      method: "Post",
      headers: {
        AuthToken: token
      },
      body: formData
    });
    return response.json();
  } catch (e) {}
};



export default () => {
  const [state, dispatch] = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState('')
    const  fileRef = React.createRef()
  const handleSubmit = e => {
    e.preventDefault();
    // convert image to base64
        const data = {
                title,
                description: description,
                category: category || 'business',
                image: image
        };

        console.table(data);
        apiItemCreate(data, state.authentication.token).then(response => {
            if(response.status === 'failed')
                alert(response.msg)
            else if(response.status === 'success'){
                console.log(response.item)
                dispatch({type:actions.UPDATE_ITEMS,item:response.item})
                alert('saved successfully')
            }
        });


  };

  if (state.authentication.login) {
    return (
      <Popup
        pinned
        on="click"
        trigger={<Button icon={'file'} color={'teal'} content={"Add Item"} />}
        position="bottom right"
      >
        <Popup.Header> Add a new Item to Review</Popup.Header>
        <Popup.Content>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                label="Title"
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
                value={title}
                required
              />
              <Form.Field
                control={Select}
                options={categoryOptions}
                label={{
                  children: "Category",
                  htmlFor: "form-select-control-category"
                }}
                placeholder="Category"
                search
                searchInput={{ id: "form-select-control-category" }}
                onChange={(e,{value}) => setCategory(value)}
                // value={category}

              />
            </Form.Group>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Opinion"
              placeholder="What are your Views"
              onChange={e => setDescription(e.target.value)}
              value={description}
              required
            />
              <Form.Field>
                  <Button
                  content='Upload Image'
                  labelPosition='left'
                  icon='file'
                  onClick={()=> fileRef.current.click()}
                  color={'teal'}
                  />
                  <input
                      id="form-file"
                      hidden
                      onChange={e => setImage(e.target.files[0])}
                      ref={fileRef}
                      type='file'
                      required
                  />
              </Form.Field>

            <Form.Field
              id="form-button-control-public"
              control={Button}
              content="Confirm"
              label="Please leave a truthful review"
              color={'google plus'}
            />
          </Form>
        </Popup.Content>
      </Popup>
    );
  } else {
    return <Fragment></Fragment>;
  }
};
