import React, { useState } from 'react';
import { Book, Shield, Star, Circle, ChevronRight, ExternalLink } from 'lucide-react';

const KnowledgeMap = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'study'

  const nodes = [
    {
      id: 'gold-plates',
      title: 'Gold Plates',
      category: 'Source',
      icon: Book,
      color: 'bg-yellow-500',
      description: 'Ancient records translated by Joseph Smith, forming the Book of Mormon',
      connections: ['mormon', 'melchizedek', 'translation'],
      references: [
        { num: 10, url: 'https://www.churchofjesuschrist.org/study/history/topics/gold-plates?lang=eng' },
        { num: 11, url: 'https://en.wikipedia.org/wiki/Golden_plates' },
        { num: 12, url: 'https://history.churchofjesuschrist.org/content/joseph-smith-translates-the-gold-plates?lang=eng' }
      ]
    },
    {
      id: 'melchizedek',
      title: 'Order of Melchizedek',
      category: 'Priesthood',
      icon: Star,
      color: 'bg-purple-500',
      description: 'Ancient priesthood order transcending tribal and temporal boundaries',
      connections: ['gold-plates', 'covenants', 'tribes'],
      references: [
        { num: 2, url: 'https://writingthroughthesoul.org/2025/06/01/spiritual-questions-what-is-the-emerald-order-of-melchizedek/' },
        { num: 7, url: 'https://versebyverseministry.org/bible-answers/what-is-the-order-of-melchizedek' },
        { num: 8, url: 'https://www.curtlandry.com/what-is-the-order-of-melchizedek/' },
        { num: 9, url: 'https://www.lcg.org/articles/order-melchizedek-explained' },
        { num: 13, url: 'https://www.gotquestions.org/order-of-Melchizedek.html' },
        { num: 14, url: 'https://www.ancientfaith.com/podcasts/lordofspirits/according_to_the_order_of_melchizedek/' },
        { num: 15, url: 'https://christoverall.com/article/concise/making-sense-of-melchizedek-through-the-framework-of-progressive-covenantalism/' }
      ]
    },
    {
      id: 'tribes',
      title: '12 Tribes',
      category: 'Structure',
      icon: Shield,
      color: 'bg-blue-500',
      description: 'Twelve tribal divisions representing covenant communities and spiritual frequencies',
      connections: ['melchizedek', 'covenants', 'shields'],
      references: [
        { num: 4, url: 'https://biblemk.com/vermont-4.html' },
        { num: 16, url: 'https://www.youtube.com/watch?v=CsM7apeE_VA' },
        { num: 17, url: 'https://en.wikipedia.org/wiki/Twelve_Tribes_communities' }
      ]
    },
    {
      id: 'shields',
      title: 'Tribal Shields',
      category: 'Symbol',
      icon: Shield,
      color: 'bg-red-500',
      description: 'Protective and identifying emblems for each tribal frequency',
      connections: ['tribes', 'maharata'],
      references: [
        { num: 3, url: 'https://ascensionglossary.com/index.php/Maharata_Christos_Tribal_Shield' },
        { num: 18, url: 'https://scripturecentral.org/knowhy/how-does-the-joseph-smith-translation-teach-us-about-melchizedek' }
      ]
    },
    {
      id: 'covenants',
      title: 'Covenants',
      category: 'Teaching',
      icon: Circle,
      color: 'bg-green-500',
      description: 'Sacred agreements for spiritual growth and transformation',
      connections: ['melchizedek', 'tribes', 'translation'],
      references: [
        { num: 1, url: 'http://www.interfaith.org/community/threads/6013/' }
      ]
    },
    {
      id: 'translation',
      title: 'Translation Process',
      category: 'Method',
      icon: Book,
      color: 'bg-indigo-500',
      description: 'Divine revelation transforming ancient records into modern understanding',
      connections: ['gold-plates', 'covenants'],
      references: [
        { num: 12, url: 'https://history.churchofjesuschrist.org/content/joseph-smith-translates-the-gold-plates?lang=eng' },
        { num: 18, url: 'https://scripturecentral.org/knowhy/how-does-the-joseph-smith-translation-teach-us-about-melchizedek' }
      ]
    },
    {
      id: 'maharata',
      title: 'Maharata Christos',
      category: 'Tradition',
      icon: Star,
      color: 'bg-pink-500',
      description: 'Christ-centered teaching incorporating tribal shield wisdom',
      connections: ['shields', 'melchizedek'],
      references: [
        { num: 3, url: 'https://ascensionglossary.com/index.php/Maharata_Christos_Tribal_Shield' }
      ]
    },
    {
      id: 'mormon',
      title: 'Book of Mormon',
      category: 'Scripture',
      icon: Book,
      color: 'bg-amber-500',
      description: 'Sacred text translated from gold plates',
      connections: ['gold-plates', 'translation'],
      references: [
        { num: 10, url: 'https://www.churchofjesuschrist.org/study/history/topics/gold-plates?lang=eng' }
      ]
    },
    {
      id: 'usa',
      title: 'Great Woman to Rule',
      category: 'Prophecy',
      icon: Star,
      color: 'bg-violet-500',
      description: 'Prophetic theme of divine feminine leadership',
      connections: ['covenants'],
      references: [
        { num: 5, url: 'https://revival.org/media/read/documents/notes/2021/2021-01-21-a-great-woman-to-rule-in-the-usa/' }
      ]
    },
    {
      id: 'emerald',
      title: 'Emerald Rainbow',
      category: 'Symbol',
      icon: Circle,
      color: 'bg-emerald-500',
      description: 'Covenant symbol of divine promise and frequency',
      connections: ['covenants', 'melchizedek'],
      references: [
        { num: 6, url: 'https://www.gotquestions.org/emerald-rainbow.html' }
      ]
    },
    {
      id: 'azurites',
      title: 'Azurites',
      category: 'Group',
      icon: Circle,
      color: 'bg-cyan-500',
      description: 'Spiritual lineage connected to ancient wisdom traditions',
      connections: ['melchizedek', 'tribes'],
      references: [
        { num: 19, url: 'https://www.scribd.com/document/80472309/Maharata-Teachings' },
        { num: 20, url: 'https://ascensionglossary.com/index.php/Azurites' }
      ]
    }
  ];

  const categories = ['Source', 'Priesthood', 'Structure', 'Symbol', 'Teaching', 'Method', 'Tradition', 'Scripture', 'Prophecy', 'Group'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Gold Plates & Order of Melchizedek
          </h1>
          <p className="text-purple-300 text-lg">Interactive Knowledge Map & Study Guide</p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => setViewMode('map')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              viewMode === 'map'
                ? 'bg-purple-600 shadow-lg shadow-purple-500/50'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            Visual Map
          </button>
          <button
            onClick={() => setViewMode('study')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              viewMode === 'study'
                ? 'bg-purple-600 shadow-lg shadow-purple-500/50'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            Study Guide
          </button>
        </div>

        {/* Visual Map View */}
        {viewMode === 'map' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Nodes Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {nodes.map((node) => {
                const Icon = node.icon;
                const isActive = activeNode?.id === node.id;
                const isConnected = activeNode?.connections?.includes(node.id) || node.connections?.includes(activeNode?.id);
                
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    className={`p-4 rounded-xl transition-all transform hover:scale-105 ${
                      isActive
                        ? 'ring-4 ring-yellow-400 shadow-2xl shadow-yellow-500/50'
                        : isConnected && activeNode
                        ? 'ring-2 ring-purple-400 opacity-100'
                        : activeNode
                        ? 'opacity-40'
                        : 'opacity-100'
                    } ${node.color} bg-opacity-20 hover:bg-opacity-30 border-2 border-white/20`}
                  >
                    <Icon className="w-8 h-8 mb-2 mx-auto" />
                    <h3 className="font-bold text-sm text-center">{node.title}</h3>
                    <p className="text-xs text-center text-white/70 mt-1">{node.category}</p>
                  </button>
                );
              })}
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-1">
              {activeNode ? (
                <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border-2 border-purple-500/30 sticky top-8">
                  <div className={`${activeNode.color} bg-opacity-20 p-4 rounded-lg mb-4`}>
                    {React.createElement(activeNode.icon, { className: "w-12 h-12 mx-auto mb-2" })}
                    <h2 className="text-2xl font-bold text-center">{activeNode.title}</h2>
                    <p className="text-sm text-center text-purple-300">{activeNode.category}</p>
                  </div>
                  
                  <p className="text-white/90 mb-4">{activeNode.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-purple-300">Connected Concepts:</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeNode.connections.map((connId) => {
                        const connNode = nodes.find(n => n.id === connId);
                        return (
                          <button
                            key={connId}
                            onClick={() => setActiveNode(connNode)}
                            className="px-3 py-1 bg-purple-600/50 rounded-full text-xs hover:bg-purple-600 transition-colors"
                          >
                            {connNode?.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 text-purple-300">References:</h3>
                    <div className="space-y-2">
                      {activeNode.references.map((ref) => (
                        <a
                          key={ref.num}
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 hover:underline"
                        >
                          <span className="bg-blue-600/50 px-2 py-0.5 rounded">[{ref.num}]</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border-2 border-purple-500/30 text-center sticky top-8">
                  <Star className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                  <p className="text-purple-300">Click on any node to explore connections and references</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Study Guide View */}
        {viewMode === 'study' && (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border-2 border-purple-500/30">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Introduction</h2>
              <p className="text-white/90 leading-relaxed">
                This study guide explores the intersection of ancient mystical traditions, focusing on the gold plates 
                as a source for the Book of Mormon translation and their connection to the Order of Melchizedek. 
                These traditions intersect in various mystical and religious teachings, each adapting ancient archetypes, 
                sacred relics, and the idea of covenants for spiritual growth and transformation.
              </p>
            </div>

            {/* Core Themes */}
            <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border-2 border-purple-500/30">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Core Themes</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                  <h3 className="font-bold text-yellow-400 mb-2">Gold Plates as Source</h3>
                  <p className="text-sm text-white/80">
                    Ancient records that served as the foundation for the Book of Mormon, representing divine revelation 
                    preserved across time for a specific purpose in the latter days.
                  </p>
                </div>
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                  <h3 className="font-bold text-purple-400 mb-2">Order of Melchizedek</h3>
                  <p className="text-sm text-white/80">
                    A priesthood order that transcends temporal boundaries, representing a direct connection to divine 
                    authority without genealogical requirement—the order of righteousness.
                  </p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="font-bold text-blue-400 mb-2">Twelve Tribal Structure</h3>
                  <p className="text-sm text-white/80">
                    The division into twelve represents completeness and divine order, with each tribe carrying unique 
                    frequencies and purposes within the greater covenant community.
                  </p>
                </div>
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                  <h3 className="font-bold text-green-400 mb-2">Covenant Progression</h3>
                  <p className="text-sm text-white/80">
                    Sacred agreements that facilitate spiritual evolution, binding heaven and earth through promises 
                    and ordinances that transform the individual and community.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Study Sections */}
            {categories.map((category) => {
              const categoryNodes = nodes.filter(n => n.category === category);
              if (categoryNodes.length === 0) return null;
              
              return (
                <div key={category} className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border-2 border-purple-500/30">
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">{category}</h2>
                  <div className="space-y-6">
                    {categoryNodes.map((node) => {
                      const Icon = node.icon;
                      return (
                        <div key={node.id} className="border-l-4 border-purple-500 pl-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`${node.color} bg-opacity-30 p-2 rounded-lg`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">{node.title}</h3>
                          </div>
                          <p className="text-white/80 mb-3">{node.description}</p>
                          
                          <div className="mb-3">
                            <p className="text-sm text-purple-300 font-semibold mb-1">Related Concepts:</p>
                            <div className="flex flex-wrap gap-2">
                              {node.connections.map((connId) => {
                                const connNode = nodes.find(n => n.id === connId);
                                return (
                                  <span key={connId} className="px-2 py-1 bg-purple-600/30 rounded text-xs">
                                    {connNode?.title}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm text-purple-300 font-semibold mb-1">Study Resources:</p>
                            <div className="space-y-1">
                              {node.references.map((ref) => (
                                <a
                                  key={ref.num}
                                  href={ref.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 hover:underline"
                                >
                                  <span className="bg-blue-600/50 px-2 py-0.5 rounded text-xs">[{ref.num}]</span>
                                  <span className="truncate">{ref.url.replace('https://', '').substring(0, 50)}...</span>
                                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Synthesis */}
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur p-6 rounded-xl border-2 border-yellow-500/30">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Synthesis & Integration</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                The gold plates represent a tangible manifestation of divine revelation—a physical-spiritual bridge 
                connecting ancient covenant people with modern seekers. The Order of Melchizedek provides the 
                priesthood framework through which this revelation is properly understood and administered.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                The twelve tribal structure reflects the divine order of completeness, with each tribe or frequency 
                contributing unique gifts to the whole. The shields represent both protection and identity—markers 
                of covenant relationship that guard sacred space while identifying those who belong.
              </p>
              <p className="text-white/90 leading-relaxed">
                These elements converge in a vision of progressive covenant-making: where ancient truth meets present 
                revelation, where priesthood authority enables transformation, and where the many become one through 
                the Law of Unity—the recognition that all separation is ultimately illusory, and that divine light 
                includes and transcends all apparent dualities.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeMap;CSSImportRule
r\d