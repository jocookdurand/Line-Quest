# Line Quest

This is the **Line Quest** educational game (Vite + React) that practices calculating the equation of a line.  
It includes:

- World selection (Forest, Desert, Ice, Space) with themed music (placeholder URLs)
- Profile & class management (saved in localStorage)
- Per-class and global leaderboards
- Hall of Fame (class + global) with animations and carousel
- Teacher Options: Reset (password-protected), Export (CSV/JSON), Print, Class management
- Sound effects, mute toggle, progress map, battle & boss modes

## Teacher password
- Reset password: **mischief managed**

## Quick start (local)
1. Install Node.js (LTS) if you don't have it: https://nodejs.org
2. Unzip this project and open a terminal in the project folder.
3. Install dependencies:

```bash
npm install
```

4. Run dev server:

```bash
npm run dev
```

5. Open the game in your browser (usually at http://localhost:5173)

## Export / Reset / Print
- Export buttons are in **Teacher Options** on the Leaderboard screen.
- Reset is password protected.
- Print uses your browser's default print dialog.

## Notes
- Placeholder music URLs are used (lightweight). You can replace them with local files in `public/` or swap URLs in `src/App.jsx`.
- All data is stored in `localStorage`. Teachers should export before resetting or sharing machines.

Enjoy! — Generated on 2025-09-24
