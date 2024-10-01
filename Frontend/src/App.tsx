
import { z } from 'zod';
import { ControlledField, useRHForm } from './components/form';
import { Input } from './components/atomic';



const App = () => {
  const schema = z.object({
  name: z.string().min(1, 'Name is required'),       // Name is required and must be a string
  email: z.string().email('Invalid email address'),  // Email must be a valid format
  age: z.number().min(18, 'Must be at least 18')     // Age must be a number and at least 18
});
 const {
    Form,
    methods: {
      control,
      formState: { errors },
    },
  } = useRHForm({schema });
  const handleclick=(data:any)=>{
    console.log(data)

  }
  return (
    <div>
      <Form onSubmit={handleclick}>
        <ControlledField
              control={control}
              label="first Names"
              name='firstName'
              errors={errors}
              Component={Input}
              className='w-full gap-3'
              required
              componentProps={{
                placeholder: "enter your name",
              }}
            />
      </Form>
    </div>
  )
}

export default App;
