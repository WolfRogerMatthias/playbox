import React from 'react';
import Layout from '../components/Layout';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

export async function getStaticProps() {
    try {
        const { stdout } = await execPromise('git log --pretty=format:"%h|%ad|%s" --date=short -n 50');
        const commits = stdout.split('\n').map(line => {
            const [hash, date, message] = line.split('|');
            return { hash, date, message };
        });

        return {
            props: {
                commits,
            },
        };
    } catch (error) {
        console.error('Error fetching git log:', error);
        return {
            props: {
                commits: [],
            },
        };
    }
}

export default function Log({ commits }) {
    return (
        <Layout>
            <section>
                <h2 className="text-2xl font-bold mb-6">Change Log</h2>
                <div className="space-y-6">
                    {commits.map((commit) => (
                        <div key={commit.hash} className="border-b border-gray-100 pb-4 last:border-0">
                            <div className="flex items-baseline justify-between mb-1">
                                <span className="font-mono text-sm text-gray-500">#{commit.hash}</span>
                                <span className="text-sm text-gray-400">{commit.date}</span>
                            </div>
                            <p className="text-gray-800">{commit.message}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
}
