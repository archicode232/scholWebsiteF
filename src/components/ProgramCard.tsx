import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: LucideIcon;
  index?: number;
}

export function ProgramCard({ title, description, imageUrl, icon: Icon, index = 0 }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <motion.div 
            className="absolute bottom-4 left-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-[var(--gold)] rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-[var(--navy)]">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
