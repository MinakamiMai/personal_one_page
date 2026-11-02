"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** 统一缓动：快速起步、柔和收束 */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Tag = "div" | "section" | "article" | "header" | "footer" | "ul" | "li" | "dl";

/** 用同一套 props 统一各类语义标签的 motion 组件 */
const MOTION = motion as unknown as Record<Tag, typeof motion.div>;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** 延迟（秒），用于同组元素手动错峰 */
  delay?: number;
  /** 位移距离，默认 24px */
  distance?: number;
  once?: boolean;
  as?: Tag;
};

/**
 * 滚动揭示：只动 transform + opacity（GPU 合成，不触发重排 / 重绘布局）。
 * 系统开启「减弱动效」时直接渲染最终态。
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
  once = true,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = MOTION[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** 父容器：让子项按顺序错峰进入 */
export function StaggerGroup({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = MOTION[as];

  return (
    <MotionTag
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = MOTION[as];

  return (
    <MotionTag className={className} variants={staggerChild}>
      {children}
    </MotionTag>
  );
}
