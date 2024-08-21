import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { cors } from '@elysiajs/cors';
import { Logestic } from 'logestic';
import staticPlugin from '@elysiajs/static';
import { config } from './config';
import { getHealth, getHealthDetail, getStatus, getStatusDetail } from './routes/health';
import { getReport, getReportDetail } from './routes/report';

const app = new Elysia();
const PORT = config.port;

app.use(cors());
app.use(staticPlugin());
app.use(Logestic.preset('fancy'));
  
// status routes
app.get('/status', getStatus, {...getStatusDetail});
app.get('/health', getHealth, {...getHealthDetail});
// app.get('/favicon.ico', () => Bun.file('public/favicon.ico'));

app.group('/v1', app => app
  // general routes
  .get('/report', ({query})=> getReport(query.url), {
    ...getReportDetail,
  })
)

app.use(swagger({
  documentation: {
    info: {
      title: 'HelpTheWeb Documentation',
      version: '1.0.0'
    }
  }
}));

app.listen(PORT)