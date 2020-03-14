import React from "react";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailForm: {
        name: {
          elementType: "input",
          elementConfig: {
            placeholder: "Your Name",
            type: "text",
            label: "Name"
          },
          value: ""
        },
        aboutMe: {
          elementType: "textarea",
          elementConfig: {
            placeholder: "Max 1000 Characters",
            type: "text",
            label: "About Me"
          },
          value: ""
        },
        education: {
          elementType: "textarea",
          elementConfig: {
            placeholder: "Educational Qualification of your last degree",
            type: "text",
            label: "Education"
          },
          value: ""
        },
        experience: {
          elementType: "textarea",
          elementConfig: {
            placeholder: "Tell me about your experience",
            type: "text",
            label: "Experience"
          },
          value: ""
        },
        yearsOfExperience: {
          elementType: "select",
          elementConfig: {
            options: [
              { value: "0-1", displayValue: "0-1" },
              { value: "1-2", displayValue: "1-2" },
              { value: "More than 2", displayValue: ">2" }
            ],
            label: "Years of Experience"
          },
          value: ""
        },
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Your primary email",
            label: "Email"
          },
          value: ""
        },
        skills: {
          elementType: "textarea",
          elementConfig: {
            placeholder: "Seperate your skills using comma(,)",
            type: "text",
            label: "Skills"
          },
          value: ""
        },
        githubHandle: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your github url",
            label: "Github"
          },
          value: ""
        },
        linkedInHandle: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your linkedIn url",
            label: "LinkedIn"
          },
          value: ""
        }
      }
    };
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedDetailForm = {
      ...this.state.detailForm
    };
    const updatedFormElement = {
      ...updatedDetailForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedDetailForm[inputIdentifier] = updatedFormElement;
    this.setState({ detailForm: updatedDetailForm });
  };

  render() {
    const detailElementsArray = [];
    for (let key in this.state.detailForm) {
      detailElementsArray.push({
        id: key,
        config: this.state.detailForm[key]
      });
    }
    let form = (
      <form onSubmit={this.detailHandler}>
        {detailElementsArray.map(detailElement => (
          <Input
            key={detailElement.id}
            label={detailElement.config.label}
            elementType={detailElement.config.elementType}
            elementConfig={detailElement.config.elementConfig}
            value={detailElement.config.value}
            changed={event => this.inputChangedHandler(event, detailElement.id)}
          />
        ))}
        <Button btnType="Success">Submit</Button>
      </form>
    );
    return (
      <React.Fragment>
        <div className={classes.ContactData}>
          <h4>Tell me about yourself</h4>
          {form}
        </div>
      </React.Fragment>
    );
  }
}

export default FormComponent;
