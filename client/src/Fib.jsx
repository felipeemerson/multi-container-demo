import React, { Component, Fragment } from "react";
import axios from "axios";

class Fib extends Component {
    state = {
        seenIndexes: [],
        values: {},
        index: ""
    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
        console.log("did mount");
    }

    async fetchValues() {
        const values = await axios.get("/api/values/current");
        this.setState({ values: values.data });
    }

    async fetchIndexes() {
        const seenIndexes = await axios.get("/api/values/all");
        this.setState({ seenIndexes: seenIndexes.data.map(item => item.number) });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post("/api/values", { value: this.state.index });

        this.setState({ index: "" });
    };

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Enter your index</label>
                    <input
                        value={this.state.index}
                        onChange={(event) => {this.setState({ index: event.target.value })}}
                    />
                    <button>Submit</button>
                </form>

                <h3>Indexes I have seen:</h3>
                { this.state.seenIndexes.length != 0 ? this.state.seenIndexes.join(", ") : null }

                <h3>Calculated values:</h3>
                {
                    Object.keys(this.state.values).map((index) => (<Fragment key={index}>{`For index ${index} | calculated ${this.state.values[index]}`}<br /></Fragment>))
                }
            </div>
        );
    }
}

export default Fib;