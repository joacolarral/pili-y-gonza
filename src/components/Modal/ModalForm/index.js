import React from "react";
import styles from "./ModalForm.module.scss";
import Button from "../../Button";
import PropTypes from "prop-types";

export default function ModalForm({
  title,
  inputs,
  onSubmit,
  initialValues,
  submitButtonLabel,
}) {
  const [formData, setFormData] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderInput = (input) => {
    switch (input.type) {
      case "text":
        return (
          <input
            type="text"
            name={input.name}
            className={styles.inputField}
            placeholder={input.placeholder}
            value={formData[input.name]}
            onChange={handleChange}
          />
        );
      case "radio":
        return (
          <div className={styles.radioButtonGroup}>
            {input.options.map((option) => (
              <label key={option.value}>
                <input
                  type="radio"
                  name={input.name}
                  value={option.value}
                  checked={formData[input.name] === option.value}
                  onChange={handleChange}
                />
                {option.label}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <div key={input.name} className={styles.inputGroup}>
              {renderInput(input)}
            </div>
          ))}
        </form>
      </div>
      <Button type="submit" className={styles.submitButton}>
        {submitButtonLabel}
      </Button>
    </div>
  );
}

ModalForm.propTypes = {
  title: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["text", "radio"]).isRequired,
      placeholder: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        })
      ),
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  submitButtonLabel: PropTypes.string,
};

ModalForm.defaultProps = {
  initialValues: {},
  submitButtonLabel: "Enviar",
};
