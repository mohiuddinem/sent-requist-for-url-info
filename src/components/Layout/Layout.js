import React, { Component } from "react";
import Table from "./Table/Table";
// import Form from './Form/Form';
import curl from "curl";
import { Button, Icon, Row, Input } from "react-materialize";
import axios from "axios";

export class Layout extends Component {
  state = {
    urlmain: null,
    urld: [
      {
        url: null,
        thumb: null,
        meta: null,
        date: null
      }
    ],
    items: []
  };

  addUrlHandler = e => {
    e.preventDefault();
    let urlData = null;
    axios
      .get(this.state.urlmain)
      .then(response => {
        urlData = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    let item = {
      url: this.state.urlmain,
      thumb: `${urlData} + thubm`,
      meta: "meta post",
      date: Date.now()
    };
    this.setState({
      items: this.state.items.concat(item)
    });

    console.log(this.state.items);
  };
  inputHandle = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <div>
          <Row>
            <form onSubmit={this.addUrlHandler}>
              <label>
                Insert a URL:
                <Input
                  type="text"
                  name="urlmain"
                  value={this.state.urlmain}
                  onChange={this.inputHandle}
                />
              </label>
              <Button waves="light" onClick={this.addUrlHandler}>
                Add Website
              </Button>
            </form>
          </Row>
        </div>
        <Table urlData={this.state.items} />
      </div>
    );
  }
}

export default Layout;
