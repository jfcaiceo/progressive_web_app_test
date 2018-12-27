import React from "react"
import ImageList from "./ImageList";
import Image from "./Image";
import Loader from "./Loader";
import SnackBar from "./SnackBar";
import AddButton from "./AddButton";
import FormDialog from "./FormDialog";

class Dogs extends React.Component {
  constructor(props) {
    super(props)
    this.fetchData = this.fetchData.bind(this)
    this.renderData = this.renderData.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDialogClose = this.handleDialogClose.bind(this)
    this.state = {
      showDialog: false,
      page: 1,
      dogs: [],
      fromCache: false
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(`/api/dogs?page=${this.state.page}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          ...this.state,
          ...json
        });
      })
      .catch((error) => {
        console.log('error')
      })
  }

  handleAddClick() {
    this.setState({
      showDialog: true
    })
  }

  handleDialogClose(action, values) {
    console.log(action)
    console.log(values)
    this.setState({
      showDialog: false
    })
  }

  renderData() {
    return (
      this.state.dogs.map((dog, i) => {
        return (
          <Image url={dog.photo}
                 label={dog.name}
                 key={i}/>
        )
      })
    )
  }

  render () {
    let snackbar;
    if(this.state.fromCache) {
      snackbar = (
        <SnackBar message={`No internet connection. Retrived from cache at ${(new Date(this.state.timestamp)).toLocaleTimeString()}`}/>
      )
    }
    return (
      <React.Fragment>
        <ImageList>
          { 
            (this.state.dogs.length > 0 ? this.renderData() : <Loader />)
          }
        </ImageList>
        <AddButton onClick={this.handleAddClick}/>
        <FormDialog title='Add new dog' open={this.state.showDialog} onClose={this.handleDialogClose}/>
        { snackbar }
      </React.Fragment>
    )
  }
}

export default Dogs