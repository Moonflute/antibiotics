// DOM Elements
const svg = d3.select("#canvas");
const detailPanel = document.getElementById('detail-panel');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const overviewBtn = document.getElementById('overview-btn');
const resetBtn = document.getElementById('reset-btn');
const closeDetailBtn = document.getElementById('close-detail-btn');

let width = window.innerWidth;
let height = window.innerHeight;

// State
let focusedNode = null;
let isOverview = false;

// Prepare data
const nodes = nodesData.map(d => Object.create(d));
// Map links to node objects
const links = linksData.map(d => {
    const link = Object.create(d);
    link.source = nodes.find(n => n.id === d.source);
    link.target = nodes.find(n => n.id === d.target);
    return link;
});

// Color scale
const getColor = (node) => {
    if (node.type === 'disease') return 'var(--color-disease)';
    if (node.type === 'bacteria') {
        if (node.group === 'Gram (+)') return 'var(--color-gram-pos)';
        if (node.group === 'Gram (-)') return 'var(--color-gram-neg)';
        return 'var(--color-atypical)';
    } else {
        if (node.group === 'Beta Lactam') return 'var(--color-beta-lactam)';
        if (node.group === 'Protein S30' || node.group === 'Protein S50') return 'var(--color-protein-synth)';
        if (node.group === 'DNA') return 'var(--color-dna)';
        if (node.group === 'RNA') return 'var(--color-rna)';
        if (node.group === 'Folic Acid') return 'var(--color-folic)';
        return '#aaaaaa';
    }
};

const g = svg.append("g");

// Tooltip/Detail interaction setup
const zoom = d3.zoom()
    .scaleExtent([0.1, 4])
    .on("zoom", (e) => {
        g.attr("transform", e.transform);
    });
svg.call(zoom);
svg.on("dblclick.zoom", null);

// Overview Group Bounding Boxes Container (behind links)
const groupBBoxes = g.append("g").attr("class", "group-bboxes");

// Links
const link = g.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("class", "link");

// Nodes
const nodeGroup = g.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(nodes)
    .enter().append("g")
    .attr("class", d => `node-group node-${d.type}`)
    .call(drag(simulation));

// Shapes
// Disease: Hexagon
nodeGroup.filter(d => d.type === 'disease')
    .append("polygon")
    .attr("points", "-60,0 -45,-25 45,-25 60,0 45,25 -45,25")
    .attr("fill", d => getColor(d))
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("stroke-opacity", 0.6);

// Bacteria: Pill/Circle
nodeGroup.filter(d => d.type === 'bacteria')
    .append("rect")
    .attr("width", 110)
    .attr("height", 40)
    .attr("x", -55)
    .attr("y", -20)
    .attr("rx", 20)
    .attr("ry", 20)
    .attr("fill", d => getColor(d))
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 1.5)
    .attr("stroke-opacity", 0.3);

// Antibiotic: Rectangle
nodeGroup.filter(d => d.type === 'antibiotic')
    .append("rect")
    .attr("width", 130)
    .attr("height", 46)
    .attr("x", -65)
    .attr("y", -23)
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("fill", d => getColor(d))
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 2)
    .attr("stroke-opacity", 0.5);

// Node Labels
nodeGroup.append("text")
    .attr("class", "node-label")
    .text(d => d.name)
    .call(wrapText, d => d.type === 'bacteria' ? 100 : 120);

// Hover "자세히" Button
const detailBtnGroup = nodeGroup.append("g")
    .attr("class", "detail-btn-group")
    .attr("transform", "translate(0, 35)");

detailBtnGroup.append("rect")
    .attr("class", "detail-btn-bg")
    .attr("width", 50)
    .attr("height", 22)
    .attr("x", -25)
    .attr("y", -11);

detailBtnGroup.append("text")
    .attr("class", "detail-btn-text")
    .text("자세히")
    .attr("y", 1);

// Physics Simulation
var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).distance(180))
    .force("charge", d3.forceManyBody().strength(-350))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius(d => d.type === 'bacteria' ? 50 : 65).iterations(2));

simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    nodeGroup
        .attr("transform", d => `translate(${d.x},${d.y})`);
});

// Drag functions
function drag(sim) {
    function dragstarted(event, d) {
        if (!event.active) sim.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    function dragended(event, d) {
        if (!event.active) sim.alphaTarget(0);
        if (!focusedNode && !isOverview) {
            d.fx = null;
            d.fy = null;
        }
    }
    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
}

// Wrap text
function wrapText(text, widthFunc) {
    text.each(function (d) {
        let textNode = d3.select(this),
            words = textNode.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1,
            y = textNode.attr("y") || 0,
            dy = 0,
            tspan = textNode.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em"),
            maxWidth = widthFunc(d);

        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > maxWidth && line.length > 1) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = textNode.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
        }
        if (lineNumber > 0) {
            const yOffset = -(lineNumber * lineHeight) / 2;
            textNode.selectAll("tspan").attr("y", yOffset + "em");
        }
    });
}

// ----------------- Layout & Interaction Logic -----------------

detailBtnGroup.on("click", (event, d) => {
    event.stopPropagation();
    focusOnNode(d);
});

function focusOnNode(targetNode) {
    focusedNode = targetNode;
    isOverview = false;
    resetBtn.classList.remove('hidden');
    overviewBtn.classList.add('hidden');
    simulation.stop();

    // Clear overview boxes
    groupBBoxes.selectAll("*").remove();

    // Determine 3 Tiers (Diseases -> Bacteria -> Antibiotics)
    let tier1 = [], tier2 = [], tier3 = [];
    const connectedLinks = new Set();

    if (targetNode.type === 'disease') {
        tier1 = [targetNode];
        // Find connected bacteria
        links.forEach(l => {
            if (l.source.id === targetNode.id || l.target.id === targetNode.id) {
                const connected = l.source.id === targetNode.id ? l.target : l.source;
                if (!tier2.find(n => n.id === connected.id)) tier2.push(connected);
                connectedLinks.add(l);
            }
        });
        // Find antibiotics connected to those bacteria
        links.forEach(l => {
            tier2.forEach(bac => {
                if (l.source.id === bac.id || l.target.id === bac.id) {
                    const connected = l.source.id === bac.id ? l.target : l.source;
                    if (connected.type === 'antibiotic' && !tier3.find(n => n.id === connected.id)) {
                        tier3.push(connected);
                    }
                    if (connected.type === 'antibiotic') connectedLinks.add(l);
                }
            });
        });
    } else if (targetNode.type === 'bacteria') {
        tier2 = [targetNode];
        links.forEach(l => {
            if (l.source.id === targetNode.id || l.target.id === targetNode.id) {
                const connected = l.source.id === targetNode.id ? l.target : l.source;
                if (connected.type === 'disease' && !tier1.find(n => n.id === connected.id)) tier1.push(connected);
                if (connected.type === 'antibiotic' && !tier3.find(n => n.id === connected.id)) tier3.push(connected);
                connectedLinks.add(l);
            }
        });
    } else if (targetNode.type === 'antibiotic') {
        tier3 = [targetNode];
        links.forEach(l => {
            if (l.source.id === targetNode.id || l.target.id === targetNode.id) {
                const connected = l.source.id === targetNode.id ? l.target : l.source;
                if (connected.type === 'bacteria' && !tier2.find(n => n.id === connected.id)) tier2.push(connected);
                connectedLinks.add(l);
            }
        });
        links.forEach(l => {
            tier2.forEach(bac => {
                if (l.source.id === bac.id || l.target.id === bac.id) {
                    const connected = l.source.id === bac.id ? l.target : l.source;
                    if (connected.type === 'disease' && !tier1.find(n => n.id === connected.id)) {
                        tier1.push(connected);
                    }
                    if (connected.type === 'disease') connectedLinks.add(l);
                }
            });
        });
    }

    const allFocusedNodes = [...tier1, ...tier2, ...tier3];

    // Dim unrelated
    nodeGroup.classed("dimmed", d => !allFocusedNodes.find(n => n.id === d.id));
    nodeGroup.selectAll(".detail-btn-group").style("display", dInner => allFocusedNodes.find(n => n.id === dInner.id) ? "block" : "none");
    link.classed("highlight", l => connectedLinks.has(l));
    link.style("opacity", l => connectedLinks.has(l) ? 1 : 0.05);

    // Layout
    const centerX = width / 2;
    const centerY = height / 2;
    const ySpacing = 160;
    const xSpacing = 160;

    // Base Y calculation based on target type to keep it roughly centered
    let startY = centerY;
    if (targetNode.type === 'disease') startY = centerY - ySpacing;
    if (targetNode.type === 'antibiotic') startY = centerY - ySpacing;

    const layoutTier = (tierNodes, yPos) => {
        const totalWidth = (tierNodes.length - 1) * xSpacing;
        const startX = centerX - (totalWidth / 2);
        tierNodes.forEach((n, i) => {
            n.fx = startX + (i * xSpacing);
            n.fy = yPos;
        });
    };

    layoutTier(tier1, startY);
    layoutTier(tier2, startY + ySpacing);
    layoutTier(tier3, startY + (ySpacing * 2));

    // Animate
    d3.selectAll('.node-group').transition().duration(800)
        .attr("transform", d => {
            if (allFocusedNodes.find(n => n.id === d.id)) return `translate(${d.fx},${d.fy})`;
            return `translate(${d.x},${d.y})`;
        });

    link.transition().duration(800)
        .attr("x1", d => d.source.fx || d.source.x)
        .attr("y1", d => d.source.fy || d.source.y)
        .attr("x2", d => d.target.fx || d.target.x)
        .attr("y2", d => d.target.fy || d.target.y);

    svg.transition().duration(800).call(
        zoom.transform,
        d3.zoomIdentity.translate(0, 0).scale(1)
    );

    // Show HTML Detail Panel
    document.getElementById('detail-title').innerText = targetNode.name;
    document.getElementById('detail-category').innerText = `${targetNode.group} > ${targetNode.subGroup}`;
    document.getElementById('detail-category').style.color = getColor(targetNode);
    document.getElementById('detail-desc').innerText = targetNode.desc;

    // Position detail panel on right side (clear any drag styles)
    detailPanel.style.left = '';
    detailPanel.style.top = '';
    detailPanel.style.right = '';
    detailPanel.classList.remove('hidden');
}

function resetView() {
    focusedNode = null;
    isOverview = false;
    resetBtn.classList.add('hidden');
    overviewBtn.classList.remove('hidden');
    detailPanel.classList.add('hidden');

    // Clear overview boxes
    groupBBoxes.selectAll("*").remove();

    nodes.forEach(n => {
        n.fx = null;
        n.fy = null;
    });

    nodeGroup.classed("dimmed", false);
    nodeGroup.selectAll(".detail-btn-group").style("display", "block");
    link.classed("highlight", false);
    link.style("opacity", 1);

    simulation.alpha(0.3).restart();

    svg.transition().duration(800).call(
        zoom.transform,
        d3.zoomIdentity.translate(0, 0).scale(1)
    );
}

closeDetailBtn.addEventListener('click', resetView);
resetBtn.addEventListener('click', resetView);

// Drag Detail Panel
let isDraggingPanel = false;
let panelOffsetX = 0;
let panelOffsetY = 0;
const detailHeader = document.getElementById('detail-title');

detailHeader.addEventListener('mousedown', (e) => {
    isDraggingPanel = true;
    const rect = detailPanel.getBoundingClientRect();
    panelOffsetX = e.clientX - rect.left;
    panelOffsetY = e.clientY - rect.top;
});
document.addEventListener('mousemove', (e) => {
    if (!isDraggingPanel) return;
    detailPanel.style.transition = 'none'; // disable css transition while dragging
    detailPanel.style.left = `${e.clientX - panelOffsetX}px`;
    detailPanel.style.top = `${e.clientY - panelOffsetY}px`;
    detailPanel.style.right = 'auto'; // override css
});
document.addEventListener('mouseup', () => {
    if (isDraggingPanel) {
        isDraggingPanel = false;
        detailPanel.style.transition = 'opacity var(--transition-speed)';
    }
});

// Hover in Overview
nodeGroup.on('mouseover', (event, d) => {
    if (isOverview) {
        const connectedNodes = new Set([d.id]);
        const connectedLinksSet = new Set();
        links.forEach(l => {
            if (l.source.id === d.id) { connectedNodes.add(l.target.id); connectedLinksSet.add(l); }
            if (l.target.id === d.id) { connectedNodes.add(l.source.id); connectedLinksSet.add(l); }
        });
        nodeGroup.style("opacity", n => connectedNodes.has(n.id) ? 1 : 0.1);
        link.style("opacity", l => connectedLinksSet.has(l) ? 1 : 0.05);
        link.attr("stroke", l => connectedLinksSet.has(l) ? "var(--accent-color)" : "rgba(255,255,255,0.2)");
        link.attr("stroke-width", l => connectedLinksSet.has(l) ? 4 : 2);

        // Ensure group boxes don't block visibility of faded items overly
        groupBBoxes.style("opacity", 0.1);
    }
});
nodeGroup.on('mouseout', () => {
    if (isOverview) {
        nodeGroup.style("opacity", 1);
        link.style("opacity", 0.2);
        link.attr("stroke", "rgba(255,255,255,0.2)");
        link.attr("stroke-width", 2);
        groupBBoxes.style("opacity", 1);
    }
});

// Overview Layout with Groupings
overviewBtn.addEventListener('click', () => {
    isOverview = true;
    focusedNode = null;
    resetBtn.classList.remove('hidden');
    overviewBtn.classList.add('hidden');
    simulation.stop();
    detailPanel.classList.add('hidden');
    nodeGroup.classed("dimmed", false);
    nodeGroup.selectAll(".detail-btn-group").style("display", "none"); // Hide detail btns in overview
    link.classed("highlight", false);
    link.style("opacity", 0.2);

    groupBBoxes.selectAll("*").remove(); // Clear existing

    // Grouping helper
    const layoutColumn = (typeNodes, startX) => {
        // Group by subGroup
        const groups = d3.group(typeNodes, d => d.subGroup);
        let currentY = 80;

        groups.forEach((groupNodes, subGroupName) => {
            const startGroupY = currentY;

            // Grid layout within group (e.g. 2 cols)
            const cols = 2;
            const xStep = 160;
            const yStep = 80;

            groupNodes.forEach((n, i) => {
                const col = i % cols;
                const row = Math.floor(i / cols);
                n.fx = startX + (col * xStep) - ((cols - 1) * xStep / 2); // center grid on startX
                n.fy = currentY + (row * yStep);
            });

            const rows = Math.ceil(groupNodes.length / cols);
            const endGroupY = currentY + ((rows - 1) * yStep);

            // Draw Bounding Box
            const padX = 140;
            const padY = 60;
            const bWidth = (cols * xStep) + padX - xStep;
            const bHeight = endGroupY - startGroupY + (padY * 2);

            // Background box
            groupBBoxes.append("rect")
                .attr("x", startX - (bWidth / 2))
                .attr("y", startGroupY - padY)
                .attr("width", bWidth)
                .attr("height", bHeight)
                .attr("rx", 16)
                .attr("fill", "rgba(255,255,255,0.03)")
                .attr("stroke", "rgba(255,255,255,0.1)")
                .attr("stroke-width", 1)
                .style("opacity", 0)
                .transition().duration(1000)
                .style("opacity", 1);

            // Group Label
            groupBBoxes.append("text")
                .attr("x", startX)
                .attr("y", startGroupY - padY + 20)
                .attr("fill", "rgba(255,255,255,0.6)")
                .attr("font-size", "14px")
                .attr("font-weight", "bold")
                .attr("text-anchor", "middle")
                .text(subGroupName)
                .style("opacity", 0)
                .transition().duration(1000)
                .style("opacity", 1);

            currentY = endGroupY + yStep + padY + 40; // Space between groups
        });

        return currentY; // Return max Y
    };

    const disNodes = nodes.filter(n => n.type === 'disease');
    const bacNodes = nodes.filter(n => n.type === 'bacteria');
    const antiNodes = nodes.filter(n => n.type === 'antibiotic');

    // Columns X pos
    const colDisX = width * 0.15;
    const colBacX = width * 0.5;
    const colAntiX = width * 0.85;

    const maxDisY = layoutColumn(disNodes, colDisX);
    const maxBacY = layoutColumn(bacNodes, colBacX);
    const maxAntiY = layoutColumn(antiNodes, colAntiX);

    d3.selectAll('.node-group').transition().duration(1000)
        .attr("transform", d => `translate(${d.fx},${d.fy})`);

    link.transition().duration(1000)
        .attr("x1", d => d.source.fx)
        .attr("y1", d => d.source.fy)
        .attr("x2", d => d.target.fx)
        .attr("y2", d => d.target.fy);

    // Zoom out to fit all
    const requiredHeight = Math.max(maxDisY, maxBacY, maxAntiY) + 100;
    // Scale to fit height primarily, or width
    const scaleX = width / (width * 1.1);
    const scaleY = height / requiredHeight;
    const scale = Math.min(scaleX, scaleY, 0.8); // Ensure it's not too giant

    svg.transition().duration(1000).call(
        zoom.transform,
        d3.zoomIdentity.translate(width / 2 - (width / 2) * scale, height / 2 - (requiredHeight / 2) * scale + 50).scale(scale)
    );
});

// Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    searchResults.innerHTML = '';

    if (!term) {
        searchResults.classList.add('hidden');
        return;
    }

    const matches = nodes.filter(n =>
        n.name.toLowerCase().includes(term) ||
        n.group.toLowerCase().includes(term) ||
        n.subGroup.toLowerCase().includes(term)
    );

    if (matches.length > 0) {
        searchResults.classList.remove('hidden');
        matches.forEach(m => {
            const div = document.createElement('div');
            div.className = 'search-item';
            let typeLabel = '항생제';
            if (m.type === 'bacteria') typeLabel = '균';
            if (m.type === 'disease') typeLabel = '질환';

            div.innerHTML = `${m.name} <span class="search-item-type">(${typeLabel})</span>`;
            div.onclick = () => {
                searchInput.value = ''; // clear upon select
                searchResults.classList.add('hidden');
                focusOnNode(m);
            };
            searchResults.appendChild(div);
        });
    } else {
        searchResults.classList.add('hidden');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        searchResults.classList.add('hidden');
    }
});

// Window Resize
window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    svg.attr("width", width).attr("height", height);
    if (!focusedNode && !isOverview) {
        simulation.force("center", d3.forceCenter(width / 2, height / 2));
        simulation.alpha(0.3).restart();
    }
});
