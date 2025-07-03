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

![screenshot](https://github.com/GPT-Laboratory/Intelligent-Haskell-Code-Refactoring/blob/main/Expertimental%20Design.png)

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

  
  ![screenshot](https://github.com/GPT-Laboratory/Intelligent-Haskell-Code-Refactoring/blob/main/backend/project_result/results.png)

---

## 📦 Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/GPT-Laboratory/Intelligent-Haskell-Code-Refactoring.git
   cd Intelligent-Haskell-Code-Refactoring
   ```
2. **Create a Virtual Environment (Optional but Recommended)**:
   ```sh
   python -m venv venv
   source venv/bin/activate   # On Windows use: venv\Scripts\activate
   ```
3. **Install Dependencies**:
   ```sh
   pip install -r requirements.txt
   ```

## Usage
1. **Setup Backend Script**:
   ```sh
   cd backend
   uvicorn app:app --reload
   ```
2. **Setup Frontend Panel**:
   ```sh
   cd frontend
   npm run start
   ```



## 📚 Citation
If you use this work in your research, please cite:

@article{siddeeq2025llm,
  title={LLM-based Multi-Agent System for Intelligent Refactoring of Haskell Code},
  author={Siddeeq, Shahbaz and Waseem, Muhammad and Rasheed, Zeeshan and Hasan, Md Mahade and Rasku, Jussi and Saari, Mika and Terho, Henri and Makela, Kalle and Kemell, Kai-Kristian and Abrahamsson, Pekka},
  journal={arXiv preprint arXiv:2506.19481},
  year={2025}
}
