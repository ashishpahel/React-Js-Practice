## Notes : -

### we can create form in react multiplay way :-

- normal form

```jsx
// create state for formdata
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});

// change event handle
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

// input
<input
  type="text"
  name="firstName"
  value={formData.firstName}
  placeholder="Enter your first name"
  onChange={handleChange}
/>;
```

- react hook form => eisme hme useForm() hook ka use krte h jisme hme
  - register (apne aap automatic update kr deta ha )
  - handleSubmit
  - formState: { errors },
  - Disadvatage - error submit button click krne pa show hote h on the spot nhi hote

```jsx
import { useForm } from "react-hook-form";

const {
  register,
  handleSubmit,
  formState: { errors },
  watch,
} = useForm();

const onSubmit = (data) => {
  console.log(data);
};

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    First Name:
  </label>
  <input
    type="text"
    name="firstName"
    {...register("firstName", {
      required: "First name is required.",
      minLength: {
        value: 2,
        message: "First name should have at least 2 characters.",
      },
    })}
    placeholder="Enter your first name"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
  {errors.firstName && (
    <p className="text-red-500 text-xs">{errors.firstName.message}</p>
  )}
</div>;
```

- Formik => ya best h eisme yup ka bhi defualt support h , eisko 3 parameter chaiye
  - initial value
  - validate function
  - onsubmit function

```jsx
// import statement
import { useFormik } from "formik";
import * as Yup from "yup";

// formik
const formik = useFormik({
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  },
  validationSchema: Yup.object({
    firstName: Yup.string()
      .matches(
        /^[a-zA-Z]{3,}$/,
        "First name must contain only alphabetic characters and be at least 3 characters long"
      )
      .required("First Name is Required"),
    lastName: Yup.string()
      .matches(
        /^[a-zA-Z]{3,}$/,
        "Last name must contain only alphabetic characters and be at least 3 characters long"
      )
      .required("Last Name is Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid phone number")
      .required("Phone is Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("confirm Password is Required"),
  }),
  onSubmit: (values) => {
    console.log(values);
  },
});



// input
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    First Name:
  </label>
  <input
    name="firstName"
    type="text"
    onChange={formik.handleChange}
    value={formik.values.firstName}
    onBlur={formik.handleBlur}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
  {formik.touched.firstName && formik.errors.firstName ? (
    <div className="text-red-500 text-xs">{formik.errors.firstName}</div>
  ) : null}
</div>;
```
