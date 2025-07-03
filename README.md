# Intelligent Haskell Code Refactoring

A multi-agent system that leverages Large Language Models (LLMs) for intelligent, automated refactoring of Haskell code. This project is based on the research paper:

**LLM-based Multi-Agent System for Intelligent Refactoring of Haskell Code**  
by Siddeeq et al. ([arXiv 2506.19481v1](https://arxiv.org/abs/2506.19481))

---

## 🚀 Overview

This project introduces a fully automated, multi-agent framework that applies LLMs to refactor Haskell programs with minimal developer intervention. Key goals include:

- Reducing code complexity
- Improving runtime performance
- Optimizing memory usage
- Enhancing code readability and maintainability

---

## 🧠 System Architecture

The framework employs four specialized LLM-powered agents:

1. **Code Analysis Agent (CAA):** Identifies refactoring opportunities.
2. **Code Refactoring Agent (CRA):** Transforms the code using learned strategies.
3. **Verification Agent (VA):** Ensures semantic correctness using tests and formal checks.
4. **Debugging Agent (DA):** Automatically fixes any introduced issues.

Agents communicate asynchronously and iteratively refine the output until desired improvements are achieved.

---

## 📈 Key Results

Evaluated across multiple real-world Haskell projects, the system achieved:

- 🔻 9–14% reduction in cyclomatic complexity
- 🚀 5–50% faster runtime
- 💾 14–21% reduction in memory usage
- 🧼 25% fewer HLint suggestions
- ✅ 30% fewer GHC warnings

---

## 📦 Installation

> **⚠️ NOTE:** Codebase is not yet publicly available. Please watch the repo for updates.

Planned installation steps (TBD):
```bash
git clone https://github.com/GPT-Laboratory/Intelligent-Haskell-Code-Refactoring.git
cd Intelligent-Haskell-Code-Refactoring
stack build
