Search = ReactMeteor.createClass({
    templateName: "Search",

    getInitialState: function() {
        return {
            text: "",
        };
    },

    onTextChange: function(e) {
        this.setState({
            text: e.target.value,
        });
    },

    render: function() {
        var text = this.state.text;

        var regex;
        try {
            regex = new RegExp(text, "i");
        } catch (err) {
            // Show nothing if it's an invalid regex
            regex = /^$/;
        }

        var query = {
            name: { $regex: regex },
        };

        return (
          <div id="search-content">
            <input id="search-input" type="text" onChange={this.onTextChange} value={this.state.text} />
            <TestList query={query} />
          </div>
        );
    },
});

