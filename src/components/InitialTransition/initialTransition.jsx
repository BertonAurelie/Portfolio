
const blackBox = {
    initial: {
      height: "100vh",    
    },
  };
  
  const InitialTransition = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-50 w-full bg-black"
          initial="initial"
          animate="animate"
            variants={blackBox}
        />      
      </div>
    );
  };