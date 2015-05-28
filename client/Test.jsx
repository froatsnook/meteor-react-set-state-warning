Test = ReactMeteor.createClass({
    componentDidMount: function() {
        if (typeof this.props._id !== "string") {
            throw new Error("Missing required prop: _id");
        }
    },

    getMeteorState: function() {
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

