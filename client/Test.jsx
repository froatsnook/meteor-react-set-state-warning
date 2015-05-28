Test = ReactMeteor.createClass({
    componentDidMount: function() {
        if (typeof this.props._id !== "string") {
            throw new Error("Missing required prop: _id");
        }
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return nextState._id !== this.state._id || nextState.name !== this.state.name;
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

