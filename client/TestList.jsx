TestList = ReactMeteor.createClass({
    getMeteorState: function() {
        return {
            tests: Tests.find(this.props.query).fetch(),
        };
    },

    getDefaultProps: function() {
        return {
            // By default search for all Tests
            query: { },
        };
    },

    render: function() {
        var tests = this.state.tests.map(function(test) {
            return <Test _id={test._id} />;
        });

        return (
          <div className="test-list">
            {tests}
          </div>
        );
    },
});

