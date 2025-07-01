import { skills } from '../../shared/constants/Skills';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const looped = [...skills, ...skills];

  const marquee = {
    animate: {
      x: ['0%', '-50%'],
      transition: {
        ease: 'linear',
        duration: 20,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  return (
    <div className="page-width flex flex-col items-center justify-center py-10">
      <h4 className="font-montserrat text-gray-900 font-bold px-4 py-2 rounded-lg bg-gray-100 text-[14px] lg:text-[20px]">
        Skills
      </h4>
      <p className="font-montserrat text-[18px] lg:text-[24px] text-center mt-4 text-gray-900">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="relative w-full overflow-hidden mt-16">
        <motion.div
          variants={marquee}
          animate="animate"
          className="flex flex-nowrap gap-10"
        >
          {looped.map((skill, i) => (
            <div
              key={skill.name + i}
              className="flex flex-col items-center gap-2 min-w-[80px]"
            >
              <div className="w-10 h-10">{skill.icon}</div>
              <span className="font-montserrat font-semibold text-[16px] lg:text-[22px] text-gray-600 px-2">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
