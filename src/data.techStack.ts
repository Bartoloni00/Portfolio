import { TechItem } from './types';
  // Ajustá las fechas `since` ('YYYY-MM-DD') a cuando empezaste con cada tecnología
export  const techs: TechItem[] = [
    { name: 'Node.js', icon: 'nodejs', url: 'https://nodejs.org/', since: '2022-03-01' },
    { name: 'Linux', icon: 'linux', url: 'https://www.linux.org/', since: '2022-01-15' },
    { name: 'Laravel', icon: 'laravel', url: 'https://laravel.com/', since: '2022-02-01' },
    { name: 'MySQL', icon: 'mysql', url: 'https://www.mysql.com/', since: '2022-02-01' },
    { name: 'React', icon: 'react', url: 'https://react.dev/', since: '2023-05-01' },
    { name: 'TypeScript', icon: 'typescript', url: 'https://www.typescriptlang.org/', since: '2023-06-01' },
    { name: 'AWS', icon: 'aws', url: 'https://aws.amazon.com/', since: '2025-08-01' },
    { name: 'DynamoDB', icon: 'database', url: 'https://aws.amazon.com/dynamodb/', isLucide: true, since: '2025-09-01' },
    { name: 'Docker', icon: 'docker', url: 'https://www.docker.com/', since: '2024-07-01' },
    { name: 'Rust', icon: 'rust', url: 'https://www.rust-lang.org/', since: '2026-01-10' },
  ];