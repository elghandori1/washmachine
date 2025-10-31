// app/api/login/route.ts
import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        // /src/app/data/route.ts
        const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'user.json');

        const fileContents = fs.readFileSync(filePath, 'utf8');
        const validUser = JSON.parse(fileContents);

        const { login, password } = await request.json();

        if (login === validUser.login && password === validUser.password) {
            return Response.json({ success: true });
        } else {
            return Response.json({ success: false }, { status: 401 });
        }
    } catch (error) {
        console.error('Login error:', error);
        return Response.json({ success: false }, { status: 500 });
    }
}