import { useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

import { useNavigate } from "react-router-dom";

function AddSneakerForm({handleAddSneaker}) {

  const [sneaker, setSneaker] = useState({
    sneakerName: "",
    nickname: "",
    styleCode: "",
    price: "",
    description: "",

  });
  
  const [photo, setPhoto] = useState(null)


//   set up navigate
  const navigate = useNavigate()

  function handleChange(e){
	setSneaker({
        ...sneaker,
        [e.target.name]: e.target.value
    })
  }

  function handleFileInput(e){
	setPhoto(e.target.files[0])
  }


  function handleSubmit(e){
    console.log("handlesubmit just ran for sneakerForm")
	e.preventDefault();

	// we have to make form data because we are sending over a photo
	// to our express server
	const formData = new FormData()
	formData.append('sneakerName', sneaker.sneakerName);
	formData.append('nickname', sneaker.nickname);
	formData.append('styleCode', sneaker.styleCode);
	formData.append('price', sneaker.price);
	formData.append('description', sneaker.description);
	formData.append('photo', photo)
	handleAddSneaker(formData)
    // Could loop through it all but ddidnt

    // navigate to feed page
    navigate("/")

  }

  return (
    <Segment>
        <h2>Add A Sneaker Card</h2>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Form.Input
          className="form-control"
          name="sneakerName"
          value={sneaker.sneakerName}
          placeholder="Sneaker Model"
          onChange={handleChange}
          required
        />
        <Form.Input
          className="form-control"
          name="nickname"
          value={sneaker.nickname}
          placeholder="Nickname"
          onChange={handleChange}
          required
        />
        <Form.Input
          className="form-control"
          name="styleCode"
          value={sneaker.styleCode}
          placeholder="Style Code"
          onChange={handleChange}
          required
        />
        <Form.Input
          className="form-control"
          name="price"
          value={sneaker.price}
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <Form.TextArea
          className="form-control"
          name="description"
          value={sneaker.description}
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <Form.Input
          className="form-control"
          type="file"
          name="photo"
          placeholder="upload image"
          onChange={handleFileInput}
        />
        <Button type="submit" className="btn">
          ADD SNEAKER
        </Button>
      </Form>
    </Segment>
  );
}

export default AddSneakerForm;
