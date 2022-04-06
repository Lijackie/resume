import { InformationCircleIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const List = ({ title, lists = [] }) => {
  return (
    <div className="mb-3 space-y-3">
      <h1 className="flex">
        <InformationCircleIcon className="w-6 h-6 mr-1" />
        <motion.span
          whileHover={{ scale: 1.5 }}
          className="ml-2 text-[#DAA520]"
        >
          {title}
        </motion.span>
      </h1>
      {lists.map((list, index) => (
        <motion.p
          initial={{
            y: "100vh",
          }}
          animate={{
            y: 0,
          }}
          transition={{ delay: 0.1, duration: 1 }}
          className="text-xl break-words whitespace-pre-line md text-gray-700 "
          key={index}
        >
          {list}
        </motion.p>
      ))}
    </div>
  );
};

export default List;
