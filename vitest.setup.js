import '@testing-library/jest-dom';

global.route= (name) =>`/${name.replace('.', '/')}`;