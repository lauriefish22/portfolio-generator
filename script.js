import fs from 'fs';
import inquirer from 'inquirer';

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: (response) => {
            if (response === '') {
                return 'Your name is required'
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'name',
        message: "Which state do you live in?",
        validate: (response) => {
            if (response === '') {
                return 'Your state is required'
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter our email",
        validate: (response) => {
            if (response === '') {
                return 'Your email is required'
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Write a few sentences describing yourself for a "bio"',
        validate: (response) => {
            if (response === '') {
                return 'A bio is required'
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?",
        validate: (response) => {
            if (response === '') {
                return 'GitHub username is required'
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'linkedin',
        message: "What is your Linkedin username?",
        validate: (response) => {
            if (response === '') {
                return '';
            }

            return true;
        }
    },
]