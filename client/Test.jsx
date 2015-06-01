Test = ReactMeteor.createClass({
    componentDidMount: function() {
        if (typeof this.props._id !== "string") {
            throw new Error("Missing required prop: _id");
        }
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return nextState.name !== this.state.name;
    },

    getMeteorState: function() {
        console.log("getMeteorState");
        return Tests.findOne(this.props._id);
    },

    render: function() {
        return (
          <p className="test">
            {this.state.name}
          </p>
        );
    },
});

