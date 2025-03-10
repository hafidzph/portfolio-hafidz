import { motion } from "framer-motion";

interface SkillsItemProps {
  skill: string;
}

export function SkillsItem({ skill }: SkillsItemProps) {
  return (
    <motion.div
      className="bg-gray-800/50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <p className="text-xs sm:text-sm font-medium text-center">{skill}</p>
    </motion.div>
  );
}
