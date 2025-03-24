import * as m from 'motion/react-m';


const TestAnimation = () => {
  return (
    <m.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="border-white border-2 p-5 text-white bg-black rounded-2xl"
    >TestAnimation</m.div>
  )
}

export default TestAnimation