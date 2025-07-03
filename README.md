# Intelligent Haskell Code Refactoring using Mulit-agent System

## Overview
This project provides a **distributed approach to refactoring Haskell-based applications** using **Large Language Models (LLMs)** and a **multi-agent system**. The goal is to automate and optimize the refactoring process by using AI-driven agents for parsing, analyzing, and restructuring Haskell code.

## Features
- **Automated Code Refactoring**: Uses LLMs to improve Haskell code structure.
- **Multi-Agent System**: Distributed approach with specialized agents for parsing, analyzing, refactoring, and validating code.
- **Performance Enhancement**: Evaluates the pre- and post-refactoring performance of Haskell code.
- **Integration with GHC**: Supports Haskell execution with the Glasgow Haskell Compiler (GHC).

## Installation
### Prerequisites
Ensure you have the following installed:
- **Python 3.x**
- **Haskell GHC Compiler**
- **Virtual Environment (optional but recommended)**

### Setup
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/Distributed-Haskell-Refactoring.git
   cd Distributed-Haskell-Refactoring
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
1. **Run the Main Script**:
   ```sh
   python main.py --input your_haskell_file.hs
   ```
2. **Specify Additional Arguments**:
   ```sh
   python main.py --input your_haskell_file.hs --output optimized.hs --log debug
   ```

## Configuration
- The system supports multiple agents:
  - **Parsing Agent**: Extracts the Abstract Syntax Tree (AST).
  - **Analysis Agent**: Evaluates code structure and performance.
  - **Refactoring Agent**: Suggests and applies improvements.
  - **Validation Agent**: Ensures correctness and optimizations.
- You can configure agent behaviors in `config.json`.

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
Special thanks to the **GPT-Lab at Tampere University** for supporting this research.

---
Feel free to reach out if you have any questions or suggestions! 🚀
