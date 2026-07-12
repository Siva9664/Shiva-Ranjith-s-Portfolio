'use client';
import { motion } from 'framer-motion';
import { RAG_FLOW, AGENT_FLOW, BACKEND_FLOW } from '@/lib/data';
import PipelineFlow from '../expertise/PipelineFlow';
import PromptStrategies from '../expertise/PromptStrategies';

export default function Expertise() {
  return (
    <div style={{ position: 'relative', zIndex: 10, padding: '40px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--cyan)', opacity: 0.5, letterSpacing: '0.2em', marginBottom: '12px' }}>
            03 / ARCHITECTURE & EXPERTISE
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--primary)' }}>
            System Architecture
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
            style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--cyan), var(--purple))', borderRadius: '2px', margin: '16px auto 0' }} />
        </div>

        {/* 1. RAG Pipeline */}
        <PipelineFlow 
          title="RAG Architecture" 
          description="Retrieval-Augmented Generation context injection pipeline"
          flowData={RAG_FLOW}
        />

        {/* 2. Agentic Systems */}
        <PipelineFlow 
          title="Multi-Agent System" 
          description="Hierarchical communication between specialized autonomous agents"
          flowData={AGENT_FLOW}
        />

        {/* 3. Prompt Engineering Grid */}
        <PromptStrategies />

        {/* 4. Backend Architecture */}
        <PipelineFlow 
          title="Backend Infrastructure" 
          description="High-performance scalable architecture using FastAPI & Django"
          flowData={BACKEND_FLOW}
        />

      </div>
    </div>
  );
}
