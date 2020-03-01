import React, { useContext, Fragment, useState } from "react";
import {
    Button,
    Form,
    Input,
    TextArea,
    Select, Modal, Image, Icon,

} from "semantic-ui-react";
import {actions, AppContext} from "../../container/AppContainer";
import Utils from "../../helpers/Utils";
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
    const [open, setOpen] = useState(false);
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
                setOpen(false);
                alert('saved successfully')
            }
        });


  };

  if (state.authentication.login) {
    return (
        <Modal
            trigger={<Button onClick={()=> setOpen(true)} icon={'file'} color={'teal'} content={"Add Review"}/>}
            open={open}
        >

            <Modal.Header>Add Review</Modal.Header>
            <Modal.Content image>
                <Image
                    wrapped
                    size="medium"
                    src={
                        "https://i.pinimg.com/originals/f3/fd/9f/f3fd9fc67ef30053c09a68f8907a7957.png"
                    }
                />
                <Modal.Description>
                    <Form warning success widths onSubmit={(e) => handleSubmit(e)}>
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

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color={'teal'} onClick={() => setOpen(false)} >
                    Close <Icon name="right chevron" />
                </Button>
            </Modal.Actions>
        </Modal>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

