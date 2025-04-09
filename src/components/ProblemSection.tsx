
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CircleHelp, AlertCircle, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import DoodleElements from './DoodleElements';

const dementiaData = [
  { year: '2020', cases: 50 },
  { year: '2025', cases: 62 },
  { year: '2030', cases: 74 },
  { year: '2035', cases: 86 },
  { year: '2040', cases: 98 },
  { year: '2045', cases: 110 },
  { year: '2050', cases: 152 },
];

const statCards = [
  {
    icon: <Users className="w-8 h-8 text-memotag-primary" />,
    value: '55+',
    title: 'Million',
    description: 'People living with dementia globally',
  },
  {
    icon: <Clock className="w-8 h-8 text-memotag-primary" />,
    value: '70%',
    title: 'Increase',
    description: 'Expected by 2050',
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-memotag-primary" />,
    value: '1 in 3',
    title: 'Seniors',
    description: 'Dies with Alzheimer\'s or dementia',
  },
  {
    icon: <CircleHelp className="w-8 h-8 text-memotag-primary" />,
    value: '60%',
    title: 'Cases',
    description: 'Go undiagnosed in developing countries',
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-memotag-background overflow-hidden relative">
      <div className="absolute top-10 right-10 w-40 h-40 bg-memotag-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-memotag-accent/5 rounded-full blur-3xl"></div>
      
      <div className="absolute top-40 right-20 opacity-10 rotate-12">
        <DoodleElements type="dots" color="#9b87f5" width={150} height={150} />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 -rotate-12">
        <DoodleElements type="zigzag" color="#6E59A5" width={120} height={80} />
      </div>
      
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-lg font-medium text-memotag-primary reveal-fade">THE CHALLENGE</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 reveal-zoom">
            Memory Loss Is a <span className="gradient-text-purple">Growing Global Crisis</span>
          </h3>
          <p className="mt-4 text-memotag-text/80 max-w-2xl mx-auto reveal">
            As our population ages, dementia cases are rising dramatically, but current care solutions 
            remain fragmented, expensive, and often ineffective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div className="bg-white rounded-xl shadow-custom p-6 reveal-left gradient-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold">Global Dementia Projection</h4>
                <p className="text-memotag-text/80">Rising cases (millions) requiring innovative solutions</p>
              </div>
              <div className="p-2 rounded-full bg-memotag-primary/10">
                <DoodleElements type="brain" color="#9b87f5" width={20} height={20} />
              </div>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={dementiaData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`${value} million`, 'Cases']}
                    labelFormatter={(label) => `Year ${label}`}
                    contentStyle={{ 
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      border: 'none'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="cases"
                    stroke="#6366F1"
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                    dot={{ stroke: '#6366F1', strokeWidth: 2, fill: 'white', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          

          <div className="space-y-6 reveal-right">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-1 bg-memotag-primary rounded"></div>
                <h4 className="text-xl font-bold">Key Challenges in Dementia Care</h4>
              </div>
              <ul className="space-y-4">
                {[
                  {title: 'Limited early detection tools', desc: 'Critical cognitive changes often go unnoticed until significant decline occurs'},
                  {title: 'Inconsistent care quality', desc: 'Care approaches vary widely with limited personalization to individual needs'},
                  {title: 'Caregiver burden', desc: 'Family members face emotional, financial, and physical exhaustion'},
                  {title: 'High cost of memory care', desc: 'Specialized facilities cost ₹50,000-₹1,50,000 per month in urban India'},
                  {title: 'Lack of cognitive stimulation', desc: 'Few tools provide tailored mental exercise to slow cognitive decline'}
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start p-3 bg-white rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300">
                    <div className="w-8 h-8 rounded-full bg-memotag-primary/20 flex items-center justify-center text-memotag-primary font-bold shrink-0">
                      <DoodleElements type={i % 5 === 0 ? 'brain' : i % 5 === 1 ? 'wave' : i % 5 === 2 ? 'dots' : i % 5 === 3 ? 'zigzag' : 'spiral'} color="currentColor" width={16} height={16} />
                    </div>
                    <div>
                      <span className="text-memotag-text/90 font-medium">{item.title}</span>
                      <p className="text-sm text-memotag-text/70 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        <div className="reveal">
              <div className="p-4 bg-memotag-primary/10 rounded-lg border-l-4 border-memotag-primary mb-5">
                <p className="text-memotag-text/90 font-medium italic">
                  "Without innovative interventions, the number of people with dementia is expected to more than triple by 2050, creating an unsustainable healthcare crisis."
                </p>
                <p className="text-right text-sm text-memotag-text/70 mt-2">- World Health Organization</p>
              </div>
            </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 neuron-path">
          {statCards.map((card, index) => (
            <Card key={index} className={cn(
              "overflow-hidden border-none shadow-custom reveal card-3d",
              "transform transition-all hover:shadow-lg"
            )}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-memotag-primary/10 p-3 rounded-full">
                    {card.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold gradient-text">{card.value}</div>
                    <div className="text-sm font-medium text-memotag-primary">{card.title}</div>
                    <p className="text-sm text-memotag-text/80">{card.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
